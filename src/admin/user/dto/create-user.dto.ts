import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum USERTYPE {
    ADMIN = "ADMIN",
    EMPLOYEE = "EMPLOYEE"
}

export class CreateUserDto {
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
}