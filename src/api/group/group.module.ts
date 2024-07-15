import { Module } from "@nestjs/common";
import { GroupController } from "./group.controller";
import { GroupService } from "./group.service";



@Module({
    imports: [],
    providers: [GroupService],
    controllers: [GroupController],
    exports: []
})

export class GroupModule { }