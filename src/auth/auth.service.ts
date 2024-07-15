import { Injectable, Req } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose"
import { LoginDto } from "./dto/login_admin.dto";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { USER_MODEL, userdocument } from "src/entity/user.entity";


@Injectable()
export class AuthService {
    constructor(
        private jwtservice: JwtService,
        @InjectModel(USER_MODEL) private readonly users: Model<userdocument>
    ) { }


    async login(logininfo: LoginDto) {
        const { email_id, password } = logininfo;
        const user = await this.users.findOne({ email_id });

        if (!user) {
            return { errorCode: 1, message: "User not found" };
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const jwt = await this.jwtservice.signAsync({ _id: user._id }); // should add expires in
            return { user, jwt, errorCode: 0 };
        }
        return { errorCode: 1, message: "Invalid Password" };
    }



}