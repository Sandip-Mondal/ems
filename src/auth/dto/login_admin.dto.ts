import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class LoginDto{
    @IsEmail()
    @IsNotEmpty()
    email_id:string;

    @IsString()
    @IsNotEmpty()
    password:string;
}