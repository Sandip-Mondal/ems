import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";
import { PROJECT_STATUS, PROJECT_TYPE } from "../constants/project.constant";
import { CLIENT_MODEL, Client } from "./client.entity";
import { ADMIN_MODEL, Admin } from "./admin.entity";
import { EMPLOYEE_MODEL, Employee } from "./employee.entity";



@Schema({ timestamps: true })
export class Project {
    @Prop({ required: true })
    name: string;

    @Prop({
        type: String,
        enum: Object.keys(PROJECT_TYPE),
        required: true
    })
    type: PROJECT_TYPE;

    @Prop({ default: new Date().toLocaleDateString(),required: true })
    assigning_date: string;

    @Prop({ required: true })
    completing_date: string;

    @Prop({
        type: String,
        enum: Object.keys(PROJECT_STATUS),
        default: PROJECT_STATUS.PENDING,
        required: true
    })
    status: PROJECT_STATUS;

    @Prop({ type: Types.ObjectId, ref: CLIENT_MODEL, required: true })
    client: Types.ObjectId | Client;

    @Prop({ type: Types.ObjectId, ref: EMPLOYEE_MODEL, required: true })
    assign_to: Types.ObjectId | Employee; // assgned by Project Manager;

    @Prop({ type: Types.ObjectId, ref: ADMIN_MODEL, required: true })
    assign_by: Types.ObjectId | Admin;

    @Prop({ type: Boolean, default: false, required: true })
    isverify: boolean;

    @Prop({ type: Types.ObjectId, ref: EMPLOYEE_MODEL })
    verified_by: Types.ObjectId | Admin;

    @Prop({ default: true, required: true })
    isUpdateable: boolean;

}

export type projectDocument = Project & Document;
export const projectSchema = SchemaFactory.createForClass(Project);
export const PROJECT_MODEL = Project.name;

function populateMiddleware(next: Function) {
    this.populate([
        { path: "client", select: { name: 1, email_id: 1, _id: 0 } },
        { path: "assign_to", select: { first_name: 1, last_name: 1, email_id: 1, _id: 0 } },
        { path: "assign_by", select: { first_name: 1, last_name: 1, email_id: 1, _id: 0 } },
        
        //{ path: "member.EmpId", select: { first_name: 1, last_name: 1, email_id: 1, _id: 0 } }
        
    ]);
    //this.populate({ path: "assign_to", select: "email_id" });
    next();
}

projectSchema.pre("find", populateMiddleware);


