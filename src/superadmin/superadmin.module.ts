import { Module } from "@nestjs/common";
import { SuperAdminService } from "./superadmin.service";
import { SuperAdminController } from "./superadmin.controller";



@Module({
    imports:[],
    controllers:[SuperAdminController],
    providers:[SuperAdminService],
    exports:[]
})
export class SuperAdmin {}