import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PROJECT_MODEL, projectDocument } from "src/entity/project.entity";
import { CreateProjectDto } from "./dto/create-project.dto";
import { PROJECT_STATUS } from "src/constants/project.constant";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { CLIENT_MODEL, clientDocument } from "src/entity/client.entity";



@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(PROJECT_MODEL) private projects: Model<projectDocument>,
        @InjectModel(CLIENT_MODEL) private clients: Model<clientDocument>,
    ) { }

    async createNewProject(projectinfo: CreateProjectDto) {
        const { name, type, client } = projectinfo;
        const project = await this.projects.findOne({ name, type, client, status: PROJECT_STATUS.PENDING });
        if (project) {
            return { message: "project exit", statusCode: HttpStatus.FOUND };
        }
        const newProject = new this.projects({
            ...projectinfo
        });
        await newProject.save();

        setTimeout(async () => await this.projects.findByIdAndUpdate(newProject.id,
            { isUpdateable: false }, { new: true }), 86400000
        );

        return { message: "success", statusCode: HttpStatus.CREATED };
    }

    async updateProject(projectId: string, projectinfo: UpdateProjectDto) {
        const project = await this.projects.findById(projectId);
        if (project.status === PROJECT_STATUS.COMPLETED || project.isUpdateable === false) {
            return { message: "not update", statusCode: 0 };
        }
        await this.projects.findByIdAndUpdate(projectId, projectinfo, { new: true });
        return { message: "update", statusCode: 1 }
    }

    async searchClient(name: string) {
        if (name.length >= 3) {
            return this.clients.find({ email_id: { $regex: name, $options: 'i' } });
        }
        return [];
    }

    async showProjectList() {
        return await this.projects.find().sort({ isverify: 1 });
    }
}