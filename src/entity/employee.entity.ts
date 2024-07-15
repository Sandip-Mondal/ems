import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";
import { EMPLOYEE_STATUS, ROLE } from "../constants/employee.constants.status";
import { User } from "./user.entity";
import { ADMIN_MODEL, Admin } from "./admin.entity";


@Schema({ timestamps: true })
export class Employee extends User {
    @Prop({
        type: String,
        enum: Object.keys(EMPLOYEE_STATUS), // [] 
        default: EMPLOYEE_STATUS.ACTIVE,
        required: true
    })
    isActive: EMPLOYEE_STATUS;

    @Prop({
        type: Number,
        trim: true,
        //required: true
    })
    experience: number;

    @Prop({ 
        trim: true,
        required: true 
    })
    qualification: string;

    @Prop({
        type: String,
        enum: Object.keys(ROLE),
        default: ROLE.TEAM_MEMBER,
        required: true
    })
    role: ROLE;

    @Prop({
        type: Types.ObjectId,
        ref: ADMIN_MODEL,
        required: true
    })
    created_by: Types.ObjectId | Admin;
}

export type employeeDocument = Employee & Document;
export const employeeShema = SchemaFactory.createForClass(Employee);
export const EMPLOYEE_MODEL = Employee.name;