import { Module } from "@nestjs/common";
import { EmployeeModule } from "./user/signup.module";
import { ClientModule } from "./client/client.module";




@Module({
    imports:[ClientModule,EmployeeModule],
    controllers:[],
    providers:[],
    exports:[]
})

export class AdminModule{}