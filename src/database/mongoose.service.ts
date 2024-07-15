import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";


@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(private configservice: ConfigService) { }
    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
        const uri = this.configservice.get<string>("URL");
        return { uri };
    }
}