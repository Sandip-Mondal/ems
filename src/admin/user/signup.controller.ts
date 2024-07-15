import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { EmployeeService } from "./signup.service";
import { AdminGuard } from "src/guard/admin.guard";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { userInfo } from "os";


@Controller("user")
@UseGuards(AdminGuard)
export class EmployeeController {
    constructor(private employeeservice: EmployeeService) { }

    @Post("admin/signup")
    AdminSignup(@Body() userinfo: CreateAdminDto) {
        return this.employeeservice.AdminSignup(userinfo);
    }

    @Post("employee/signup")
    EmployeeSignup(@Body() userinfo: CreateEmployeeDto, @Req() req: Request) {
        const adminId = req["adminId"];
        return this.employeeservice.EmployeeSignup({ ...userinfo, created_by: adminId });
    }

    @Get("list")
    UserList(@Req() req: Request) {
        return this.employeeservice.UserList(req["adminId"]);
    }

    @Delete("delete/:id")
    DeleteUser(@Param("id") id: string) {
        return this.employeeservice.DeleteUser(id);
    }

    @Put("update/:id")
    UpdateUser(@Param("id") id: string, @Body() updatedInfo: UpdateEmployeeDto) {
        return this.employeeservice.UpdateUser(id, updatedInfo);
    }


}