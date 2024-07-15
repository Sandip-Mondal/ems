import { Body, Controller, UseGuards, Post } from "@nestjs/common";
import { SuperAdminService } from "./superadmin.service";
import { CreateAdminDto } from "./dto/create_admin.dto";
import { SuperAdminAuthGuard } from "./Auth.guard";



@Controller("superadmin")
@UseGuards(SuperAdminAuthGuard)
export class SuperAdminController {
    constructor(private readonly admin: SuperAdminService) { }
    
    @Post("signup")
    createAdmin(@Body() admininfo: CreateAdminDto) {
        return this.admin.signup(admininfo);
    }
}