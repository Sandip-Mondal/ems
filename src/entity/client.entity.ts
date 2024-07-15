import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Client {
    @Prop({
        type: String,
        trim:true,
        required: true
    })
    name: string;

    @Prop({
        type: String,
        trim:true,
        required: true
    })
    address: string;

    @Prop({
        type: String,
        trim:true,
        unique: true,
        required: true
    })
    phone_no: string;

    @Prop({
        type: String,
        trim:true,
        lowercase:true,
        unique: true,
        required: true
    })
    email_id: string;

    @Prop({
        type: String,
        trim:true,
        default:""
    })
    remarks: string;
}

export type clientDocument = Client & Document;
export const clientSchema = SchemaFactory.createForClass(Client);
export const CLIENT_MODEL = Client.name;

