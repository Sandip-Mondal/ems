/*import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";
import { EMPLOYEE_ATTENDANCE_MODEL, EmployeeAttendance } from "./attendance.schema";


interface PaySlip {
    basic: string;
    DA: string;
    HRA: string;
    TA: string;
    total_addition: string;
    providiing_found: string;
    ESI: string;
}


@Schema({ timestamps: true })
export class EmployeeSalary {
    @Prop({ required: true })
    year: string;

    @Prop({ required: true })
    month: string;

    @Prop({ type: Types.ObjectId, ref: EMPLOYEE_ATTENDANCE_MODEL, required: true })
    employee_attendance: Types.ObjectId | EmployeeAttendance;

    @Prop(
        raw({
            basic: {
                type: String,
                required: true
            },
            DA: {
                type: String,
                required: true
            },
            HRA: {
                type: String,
                required: true
            },
            TA: {
                type: String,
                required: true
            },
            total_addition: {
                type: String,
                required: true
            },
            providiing_found: {
                type: String,
                required: true
            },
            ESI: {
                type: String,
                required: true
            },
        })
    )
    payslip: PaySlip;

    @Prop({ required: true })
    employee_salary: number;
}

export type employeeSalaryDocument = EmployeeSalary & Document;
export const employeeSalarySchema = SchemaFactory.createForClass(EmployeeSalary);
export const EMPLOYEE_SALARY_MODEL = EmployeeSalary.name;*/