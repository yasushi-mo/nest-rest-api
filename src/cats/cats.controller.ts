import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CatDTO } from "src/cats/cat.dto";
import { Cat } from "src/cats/cat.interface";
import { CatsService } from "src/cats/cats.service";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Cat | null> {
    return this.catsService.findOne(id);
  }

  @Post()
  async create(@Body() createCatDto: CatDTO): Promise<void> {
    this.catsService.create(createCatDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() updateCatDto: CatDTO,
  ): Promise<Cat | null> {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.catsService.delete(id);
  }
}
