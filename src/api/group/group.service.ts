import { HttpStatus, Injectable } from "@nestjs/common";
import { CreateGroupDto, Member } from "./dto/create-group.dto";
import { GROUP_MODEL, groupDocument } from "src/entity/group.entity";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { EMPLOYEE_MODEL, employeeDocument } from "src/entity/employee.entity";
import { ROLE } from "src/constants/employee.constants.status";
import { AddMemberDto } from "./dto/addmember.dto";


@Injectable()
export class GroupService {
    constructor(
        @InjectModel(GROUP_MODEL) private groups: Model<groupDocument>,
        @InjectModel(EMPLOYEE_MODEL) private employees: Model<employeeDocument>,
    ) { }

    // search member mean for adding single or multiple memeber
    async searchMemberForAdd(members: string[], search: string) {

        if (search.length >= 3) {
            return await this.employees.find({
                email_id: { $regex: search, $options: 'i' },
                _id: { $nin: members },
                role: ROLE.TEAM_MEMBER
            })
        }
        return [];
    }

    // create group
    async createGroup(groupinfo: CreateGroupDto) {
        const { team_lead } = groupinfo;
        const group = await this.groups.findOne({ team_lead });
        if (group) {
            return { message: "already exit", statusCode: HttpStatus.FOUND };
        }
        await this.groups.create(groupinfo);
        return { message: "success", statusCode: HttpStatus.CREATED };
    }

    // for adding memeber in group
    async addMember(team_lead: string, members: AddMemberDto) {
        console.log(members.group);
        const group = await this.groups.findOne({ team_lead });
        if (!group) {
            return { message: "Group is not created", statusCode: HttpStatus.BAD_REQUEST }
        }
        await this.groups.updateOne(
            { team_lead }, { $push: { group: { $each: members.group } } }
        )

        return { message: "success", statusCode: HttpStatus.ACCEPTED };
    };


    // for delete group one by one
    async deleteGroupOnebyOne(team_lead: string, memberId: string) {
        await this.groups.updateOne(
            { team_lead }, { $pull: { group: { id: memberId } } }
        );
        return { message: "success", statusCode: HttpStatus.ACCEPTED };
    }


}