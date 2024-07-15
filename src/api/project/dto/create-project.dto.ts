import { IsEnum, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { PROJECT_STATUS, PROJECT_TYPE } from "src/constants/project.constant";


export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEnum(PROJECT_TYPE)
    @IsNotEmpty()
    type:PROJECT_TYPE;

    @IsString()
    @IsNotEmpty()
    completing_date:string;

    @IsMongoId()
    @IsNotEmpty()
    client:string;

    @IsMongoId()
    @IsNotEmpty()
    assign_to:string;

    @IsMongoId()
    @IsNotEmpty()
    assign_by:string;

}