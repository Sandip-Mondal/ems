import { Prop } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { IsString, IsMongoId, ValidateNested, IsNotEmpty, IsOptional, IsArray } from "class-validator";

export class Member {
    @IsMongoId()
    @IsNotEmpty()
    id: string;
}

export class CreateGroupDto {
    @IsString()
    @IsNotEmpty()
    group_name: string;

    @IsMongoId()
    @IsOptional()
    team_lead: string;

    @ValidateNested({ each: true })
    @Type(() => Member)
    @IsArray()
    group: Member[];
}