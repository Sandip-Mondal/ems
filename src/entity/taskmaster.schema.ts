/*import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from 'mongoose';
import { PROJECT_MODEL, Project } from "./project.schema";
import { EMPLOYEE_MODEL, Employee } from "./employee.schema";


interface Members {
    EmpId: Employee;
    task_part: string;
}

@Schema({ timestamps: true })
export class Taskmaster {
    @Prop({ type: Types.ObjectId, ref: PROJECT_MODEL, required: true })
    project_id: Types.ObjectId | Project;

    @Prop({ type: Types.ObjectId, ref: EMPLOYEE_MODEL })
    lead_id: Types.ObjectId | Employee; // created by employee himself

    @Prop([{ EmpId: { type: Types.ObjectId, ref: EMPLOYEE_MODEL }}])
    assign_member: Members[];
}

export type TaskmasterDocument = Taskmaster & Document;
export const TaskmasterSchema = SchemaFactory.createForClass(Taskmaster);
export const TASKMASTER_MODEL = Taskmaster.name;

async function getPopulate(next: Function) {
    this.populate([
        { path: "project_id", select: { name: 1, type: 1, _id: 0 } },
        { path: "created_by", select: { name: 1, email_id: 1, _id: 0 } },
        { path: "assign_member.EmpId", select: { first_name: 1, last_name: 1, email_id: 1, _id: 0 } }
    ])
}

TaskmasterSchema.pre("find", getPopulate);*/