import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    phone_no: string;

    @IsEmail()
    @IsNotEmpty()
    email_id: string;

    @IsString()
    @IsOptional()
    remarks: string;
}