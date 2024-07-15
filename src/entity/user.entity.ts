import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as bcrypt from "bcrypt";

@Schema({ timestamps: true, discriminatorKey: "userkind" })
export class User {
    @Prop({
        type: String,
        trim: true,
        required: true
    })
    name: string;

    @Prop({
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    })
    email_id: string;

    @Prop({
        type: String,
        trim: true,
        required: true
    })
    phone_no: string;

    @Prop({
        type: String,
        trim: true,
        required: true,
    })
    password: string;

    @Prop({
        type: String
    })
    device_id: string;
}


export const userschema = SchemaFactory.createForClass(User);
export type userdocument = User & Document;
export const USER_MODEL = User.name;


userschema.pre('save', async function (next: Function) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }
});



