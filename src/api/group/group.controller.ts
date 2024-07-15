import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { GroupService } from "./group.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { Request } from "express";
import { projectManagerGuard } from "src/guard/searchmember.guard";
import { AddMemberDto } from "./dto/addmember.dto";



@Controller("group")
@UseGuards(projectManagerGuard)
export class GroupController {
    constructor(private groupservice: GroupService) { }

    @Post("searchMember/:search")
    searchMemberForAdd(@Body("members") members: string[], @Param("search") search: string) {
        return this.groupservice.searchMemberForAdd(members, search);
    }

    @Post("create")
    createGroup(@Body() groupinfo: CreateGroupDto, @Req() req: Request) {
        return this.groupservice.createGroup({ ...groupinfo, team_lead: req["team_lead"] });
    }

    @Post("addMemeber")
    addMember(@Body() members: AddMemberDto, @Req() req: Request) {
        const team_lead = req["team_lead"];
        //return members;
        return this.groupservice.addMember(team_lead, members);
    }

    @Get("removeMember/:memberId")
    deleteGroupOnebyOne(@Req() req: Request, @Param("memberId") memberId: string) {
        const team_lead = req["team_lead"];
        return this.groupservice.deleteGroupOnebyOne(team_lead, memberId);
    }
}