import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateUserDto } from "src/admin/user/dto/create-user.dto";
import { ADMINTYPE } from "src/entity/admin.entity";

export class CreateAdminDto extends CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email_id: string;

    @IsString()
    @IsNotEmpty()
    phone_no: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsOptional()
    device_id: string;

    @IsEnum(ADMINTYPE)
    @IsNotEmpty()
    subkind: ADMINTYPE;
}