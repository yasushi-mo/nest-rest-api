import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Cat } from "src/cats/cat.interface";
import { CatsService } from "src/cats/cats.service";
import { CreateCatDTO } from "src/cats/create-cat.dto";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDTO) {
    this.catsService.create(createCatDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.catsService.delete(id);
  }
}
