/*import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";
import { EMPLOYEE_MODEL, Employee } from "./employee.schema";
import { AttendancePerDay, attendancePerDaySchema } from "./employee_attendance_per_day.schema";


interface Attendance_rule {
    description: string;
    constrain: string;
}

@Schema({ timestamps: true })
export class EmployeeAttendance {
    @Prop({ type: String, required: true })
    year: string;

    @Prop({ type: Number, required: true })
    month: number;

    @Prop({ type: Types.ObjectId, ref: EMPLOYEE_MODEL, required: true })
    employee_id: Types.ObjectId | Employee;

    @Prop(raw({
        description: {
            type: String,
            required: true
        },
        constrain: {
            type: String,
            required: true
        }
    }))
    attendance_rule: Attendance_rule;

    @Prop({ type: Number, required: true })
    total_attendance: number;

    @Prop({ type: Number, required: true })
    WFH_attendance: number;

    @Prop({ type: Number, required: true })
    physical_attendance: number;

    @Prop({type: [attendancePerDaySchema]})
    attendance_per_day: AttendancePerDay[];
}

export type employeeAttendanceDocument = Employee & Document;
export const employeeAttendanceSchema = SchemaFactory.createForClass(EmployeeAttendance);
export const EMPLOYEE_ATTENDANCE_MODEL = EmployeeAttendance.name;*/