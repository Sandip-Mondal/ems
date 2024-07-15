import { User } from "./user.entity";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum ADMINTYPE {
    NORMAL_ADMIN = "NORMAL_ADMIN"
}


@Schema({ timestamps: true })
export class Admin extends User {
    @Prop({
        type: String,
        enum: Object.keys(ADMINTYPE),
        required: true
    })
    subkind: ADMINTYPE;
}


export const adminschema = SchemaFactory.createForClass(Admin);
export type admindocument = Admin & Document;
export const ADMIN_MODEL = Admin.name;


