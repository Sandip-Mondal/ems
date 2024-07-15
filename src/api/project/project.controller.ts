import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AdminGuard } from "src/guard/admin.guard";
import { CreateProjectDto } from "./dto/create-project.dto";
import { ProjectService } from "./project.service";
import { UpdateProjectDto } from "./dto/update-project.dto";


@Controller("project")
@UseGuards(AdminGuard)
export class ProjectController {
    constructor(private projectservice: ProjectService) { }

    @Post('create')
    createNewProject(@Body() projectinfo: CreateProjectDto) {
        return this.projectservice.createNewProject(projectinfo);
    }

    @Post('update/:projectId')
    updateProject(@Param("projectId") projectId: string, @Body() updateinfo: UpdateProjectDto) {
        return this.projectservice.updateProject(projectId,updateinfo);
    }

    @Get("searchclient/:name")
    searchClient(@Param("name") name:string){
        return this.projectservice.searchClient(name)
    }
    

    @Get("showlist")
    showProjectList() {
        return this.projectservice.showProjectList();
    }


}