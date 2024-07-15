import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common";
import { CreateClientDto } from "./dto/create.client.dto";
import { ClientService } from "./client.service";
import { UpdateClientDto } from "./dto/update_client.dto";
import { AdminGuard } from "src/guard/admin.guard";


@Controller('client')
@UseGuards(AdminGuard)
export class ClientController {
    constructor(private clientservice: ClientService) { }

    @Post('signup')
    createClient(@Body() clientinfo: CreateClientDto) {
        return this.clientservice.createClient(clientinfo);
    }

    @Post("update/:id")
    updateClient(@Param("id") id: string, @Body() updateinfo: UpdateClientDto) {
        return this.clientservice.updateClient(id,updateinfo);
    }
}