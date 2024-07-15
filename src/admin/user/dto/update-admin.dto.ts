import { PartialType } from "@nestjs/mapped-types";
import { CreateAdminDto } from "src/superadmin/dto/create_admin.dto";


export class UpdateAdminDto extends PartialType(CreateAdminDto) { }