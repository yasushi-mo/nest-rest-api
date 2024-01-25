import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { OwnerDTO } from "./owner.dto";
import { Owner } from "./owner.interface";
import { OwnersService } from "./owners.service";

@Controller("owners")
export class OwnersController {
  constructor(private ownersService: OwnersService) {}

  @Get()
  async findAll(): Promise<Owner[]> {
    return this.ownersService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Owner | null> {
    return this.ownersService.findOne(id);
  }

  @Post()
  async create(@Body() createOwnerDto: OwnerDTO): Promise<void> {
    this.ownersService.create(createOwnerDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() updateOwnerDto: OwnerDTO,
  ): Promise<Owner | null> {
    return this.ownersService.update(id, updateOwnerDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.ownersService.delete(id);
  }
}
