import { Module } from "@nestjs/common";
import { ClientService } from "./client.service";
import { ClientController } from "./client.controller";



@Module({
    imports:[],
    controllers:[ClientController],
    providers:[ClientService],
    exports:[]
})

export class ClientModule{}