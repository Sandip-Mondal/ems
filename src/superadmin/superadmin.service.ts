import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ADMIN_MODEL, admindocument } from "src/entity/admin.entity";
import { CreateAdminDto } from "./dto/create_admin.dto";



@Injectable()
export class SuperAdminService {
    constructor(@InjectModel(ADMIN_MODEL) private readonly admins: Model<admindocument>) { }

    async signup(admininfo: CreateAdminDto) {
        const { email_id } = admininfo;
        const isExitAdmin = await this.admins.findOne({ email_id:email_id.toLowerCase() });

        if (isExitAdmin) {
            return { message: "user exit", statusCode: HttpStatus.FOUND }
        }
        await this.admins.create(admininfo);
        return { message: "success", statusCode: HttpStatus.CREATED }
    }


}