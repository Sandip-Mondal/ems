/*import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { EMPLOYEE_MODEL, Employee } from "./employee.schema";
import { PROJECT_MODEL, Project } from "./project.schema";
import { PROJECT_STATUS } from "src/constants/project.constant";
import { ADMIN_MODEL, Admin } from "./user.entity";



@Schema()
export class EmployeeDailyTask {

    @Prop({ type: Types.ObjectId, ref: EMPLOYEE_MODEL, required: true })
    employee_id: Types.ObjectId | Employee;

    @Prop({ type: Number, required: true })
    year: number;

    @Prop({ type: Number, required: true })
    month: number;

    @Prop({ required: true })
    day: number;

    @Prop({ default: Date.now() / (1000 * 60) }) /// *****************
    start_time: number;

    @Prop({ default: Date.now() / (1000 * 60) }) //**************
    completed_time: number;

    @Prop({ type: Types.ObjectId, ref: PROJECT_MODEL, required: true })
    project_id: Types.ObjectId | Project;

    @Prop({  })
    task_part: string;

    @Prop({
        type: String,
        enum: Object.keys(PROJECT_STATUS),
        default: PROJECT_STATUS.PENDING
    })
    status: PROJECT_STATUS;

    @Prop({ type: Boolean, default: false, required: true })
    isVerified: boolean;

    @Prop({ type: Types.ObjectId, ref: EMPLOYEE_MODEL, required: true })
    lead_id: Types.ObjectId | Employee;

}


export const EmployeeDailyTaskSchema = SchemaFactory.createForClass(EmployeeDailyTask);
export type EmployeeDailyTaskDocument = EmployeeDailyTask & Document;
export const EMPLOYEEDAILYTASK_MODEL = EmployeeDailyTask.name;*/

























/*
import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Types } from 'mongoose';
import { PROJECT_STATUS } from "../constants/project.constant";
import { TASKMASTER_MODEL, Taskmaster } from "./taskmaster.schema";
import { ADMIN_MODEL, Admin } from "./admin.schema";

interface TASK_DETAILS {
    assigning_taskId: Types.ObjectId | Taskmaster;
    task_part: string,
    hours: number,
    status: string;
    verified_by: Types.ObjectId | Admin,
}

interface IN_OUT {
    time_in: number;
    time_out: number;
}

@Schema()
export class EmployeeDailyTask {
    @Prop({ required: true })
    day: number;

    @Prop({ required: true })
    totalHours: number;

    @Prop([
        raw({
            assigning_taskId: {
                type: Types.ObjectId,
                ref: TASKMASTER_MODEL
            },

            task_part: String,

            //hours: Number,

            status: {
                type: String,
                enum: Object.keys(PROJECT_STATUS),
                default: PROJECT_STATUS.PENDING
            },

            verified_by: {
                type: Types.ObjectId,
                ref: ADMIN_MODEL
            },
        })
    ])
    task_details: TASK_DETAILS[];

    @Prop([
        raw({
            time_in: Number,
            time_out: Number,
        })
    ])
    in_out: IN_OUT[];

    //@Prop()
    //status: string;
}

export const employeeDailyTaskShema = SchemaFactory.createForClass(EmployeeDailyTask);
*/