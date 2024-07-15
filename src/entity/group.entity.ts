import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { EMPLOYEE_MODEL, Employee } from "./employee.entity";


interface MemberId {
    id: string;
}


@Schema({ timestamps: true })
export class Groups {
    @Prop({required:true})
    group_name:string;

    @Prop({ type: Types.ObjectId, ref: EMPLOYEE_MODEL, required: true })
    team_lead: Types.ObjectId | Employee;

    @Prop([raw({ id: { type: Types.ObjectId, ref: EMPLOYEE_MODEL } })])
    group: MemberId[];
}


export type groupDocument = Groups & Document;
export const groupSchema = SchemaFactory.createForClass(Groups);
export const GROUP_MODEL = Groups.name;

async function getPopulate(next: Function) {
    this.populate({ path: "group.id", select: { name: 1, email: 1, _id: 0 } });
    next();
}

groupSchema.pre("find", getPopulate);