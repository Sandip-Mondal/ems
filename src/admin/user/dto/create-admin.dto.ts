import { IsEnum, IsNotEmpty } from "class-validator";
import { ADMINTYPE } from "src/entity/admin.entity";
import { CreateUserDto } from "./create-user.dto";




export class CreateAdminDto extends CreateUserDto{
    @IsEnum(ADMINTYPE)
    @IsNotEmpty()
    subkind: ADMINTYPE;
}