import { PartialType } from "@nestjs/mapped-types";
import { CreateClientDto } from "../../client/dto/create.client.dto";

export class UpdateClientDto extends PartialType(CreateClientDto) {}