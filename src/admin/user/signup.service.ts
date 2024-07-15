import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EMPLOYEE_MODEL, employeeDocument } from "src/entity/employee.entity";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { Injectable } from "@nestjs/common";
import { ADMIN_MODEL, admindocument } from "src/entity/admin.entity";
import { USER_MODEL, userdocument } from "src/entity/user.entity";
import { CreateAdminDto } from "src/superadmin/dto/create_admin.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";


@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(EMPLOYEE_MODEL) private employees: Model<employeeDocument>,
        @InjectModel(ADMIN_MODEL) private admins: Model<admindocument>,
        @InjectModel(USER_MODEL) private users: Model<userdocument>,
    ) { }

    async AdminSignup(userinfo: CreateAdminDto) {
        const { email_id } = userinfo;
        const user = await this.users.findOne({ email_id });

        if (user) {
            return { errorCode: 1, message: "User Exit" };
        }

        var newUser = new this.admins(userinfo);

        await newUser.save();
        delete newUser.password;

        return { errorCode: 0, newUser };
    }

    async EmployeeSignup(userinfo: CreateEmployeeDto) {
        const { email_id } = userinfo;
        const user = await this.users.findOne({ email_id });

        if (user) {
            return { errorCode: 1, message: "User Exit" };
        }
        var newUser = new this.employees(userinfo);

        await newUser.save();

        delete newUser.password;

        return { errorCode: 0, newUser };
    }


    /*async Update(userId: string, updateinfo: UserUpdate) {
        const employee = await this.users.findByIdAndUpdate(userId, updateinfo, { new: true });
        if (!employee) {
            return { status: 0, statusCode: HttpStatus.UNAUTHORIZED };
        }
        return { status: 1, statusCode: HttpStatus.FOUND };
    }*/

    async UserList(adminId: string) {
        const users = await this.users.find({ _id: { $ne: adminId } }).select({ password: 0, createdAt: 0, updatedAt: 0 });
        return { errorCode: 0, userList: users };
    }

    async DeleteUser(userId: string) {
        const user = await this.users.findById(userId);
        if (user) {
            await this.users.findByIdAndDelete(userId);
            return { errorCode: 0, userId: user._id };
        }
        return { errorCode: 0, message: "user not found" };
    }

    async UpdateUser(userId: string, updatedInfo: UpdateEmployeeDto) {
        const user = await this.users.findById(userId);
        const isMatch = updatedInfo.email_id === user.email_id;

        if (user && isMatch) {
            await this.users.findByIdAndUpdate(userId, updatedInfo, { new: true });
            return { errorCode: 0, userId, updatedInfo };
        }
        else if (user && !isMatch) {
            const newUser = await this.users.findOne({ email_id: updatedInfo.email_id });
            if (!newUser) {
                await this.users.findByIdAndUpdate(userId, updatedInfo, { new: true });
                return { errorCode: 0, userId, updatedInfo };
            }

        }
        return { errorCode: 1, message: "Email Exit" };
    }

}