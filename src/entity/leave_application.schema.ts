/*import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from 'mongoose'
import { LEAVEPERMIT } from "../constants/employee.constants.status";
import { EMPLOYEE_MODEL, Employee } from "./employee.schema";
import { ADMIN_MODEL, Admin } from "./user.entity";


@Schema({ timestamps: true })
export class LeaveApplication {
        @Prop({ type: Types.ObjectId, ref: EMPLOYEE_MODEL, required: true })
        employee_id: Types.ObjectId | Employee;

        @Prop({ required: true })
        from_date: string;

        @Prop({ required: true })
        to_date: string;

        @Prop({ required: true })
        leave_type: string;

        @Prop({ type: [String], required: true })
        document_url: string[];

        @Prop()
        description: string;

        @Prop({ type: Types.ObjectId, ref: ADMIN_MODEL })
        approved_by: Types.ObjectId | Admin;

        @Prop()
        approved_date: string;

        @Prop({
                type: String,
                enum: Object.keys(LEAVEPERMIT),
                default:LEAVEPERMIT.PENDING
        })
        status: LEAVEPERMIT;
}


export type LeaveApplicationDocument = LeaveApplication & Document;
export const leaveApplicationSchema = SchemaFactory.createForClass(LeaveApplication);
export const LEAVEAPPLICATION_MODEL = LeaveApplication.name;*/