import { Type } from "class-transformer";
import { Member } from "./create-group.dto";
import { IsArray, IsNotEmpty, ValidateNested } from "class-validator";


export class AddMemberDto {
    @ValidateNested({each:true})
    @IsArray()
    @Type(()=> Member)
    group: Member[];
}