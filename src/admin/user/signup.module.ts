import { Module } from "@nestjs/common";
import { EmployeeController } from "./signup.controller";
import { EmployeeService } from "./signup.service";



@Module({
    imports:[],
    controllers:[EmployeeController],
    providers:[EmployeeService],
    exports:[]
})

export class EmployeeModule {}