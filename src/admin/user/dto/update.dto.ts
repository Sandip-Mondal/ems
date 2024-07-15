import { IsNotEmpty, IsString } from "class-validator";



export class UserUpdate {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}