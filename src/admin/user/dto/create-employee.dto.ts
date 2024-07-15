import { IsEnum, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { EMPLOYEE_STATUS, ROLE } from "src/constants/employee.constants.status";
import { CreateUserDto } from "./create-user.dto";


export class CreateEmployeeDto extends CreateUserDto {
    @IsIn(Object.keys(EMPLOYEE_STATUS))
    @IsOptional()
    isActive: EMPLOYEE_STATUS;

    @IsNumber()
    @IsNotEmpty()
    experience: number;

    @IsString()
    @IsOptional()
    qualification: string;

    @IsEnum(ROLE)
    @IsNotEmpty()
    role: ROLE;

    @IsString()
    @IsOptional()
    created_by: string;
}