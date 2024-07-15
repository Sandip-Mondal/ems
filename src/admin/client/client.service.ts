import { HttpStatus, Injectable } from "@nestjs/common";
import { CreateClientDto } from "./dto/create.client.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CLIENT_MODEL, clientDocument } from "src/entity/client.entity";
import { UpdateClientDto } from "./dto/update_client.dto";




@Injectable()
export class ClientService {
    constructor(@InjectModel(CLIENT_MODEL) private clients: Model<clientDocument>) { }

    async createClient(clientinfo: CreateClientDto) {
        const { phone_no, email_id } = clientinfo;
        const isExit = await this.clients.findOne({ $or: [{ phone_no }, { email_id }] });
        if (isExit) {
            return { message: "client Exit", statusCode: HttpStatus.FOUND };
        }
        await this.clients.create(clientinfo);
        return { message: "success", statusCode: HttpStatus.CREATED };
    }

    async updateClient(id: string, updateinfo: UpdateClientDto) {
        const client = await this.clients.findByIdAndUpdate(id, updateinfo, { new: true });
        if (!client) {
            return { message: "failed", statusCode: HttpStatus.BAD_REQUEST };
        }
        return { message: "success", statusCode: HttpStatus.CREATED }
    }


}