/*import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { ATTENDANCE_MODE, EMPLOYEE_ATTENDANCE } from "../constants/employee.constants.status";


interface IN_OUT {
    time_in: number;
    time_out: number;
}


@Schema()
export class AttendancePerDay {
    @Prop({ type: String, required: true })
    date: string;

    @Prop({
        type: String,
        enum: Object.keys(EMPLOYEE_ATTENDANCE),
        default: EMPLOYEE_ATTENDANCE.ABSENT,
        required:true
    })
    status: EMPLOYEE_ATTENDANCE;

    @Prop({
        type: String,
        enum: Object.keys(ATTENDANCE_MODE)
    })
    attendance_mode: ATTENDANCE_MODE;

    @Prop({ type: Number })
    hours: number;

    @Prop({ type: String })
    description: string;

    @Prop([
        raw({
            time_in: Number,
            time_out: Number
        })
    ])
    in_out: IN_OUT[];
}

export const attendancePerDaySchema = SchemaFactory.createForClass(AttendancePerDay);*/