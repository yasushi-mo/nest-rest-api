import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDTO } from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat.interface';
import { CatsService } from 'src/services/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDTO) {
    this.catsService.create(createCatDto);
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
