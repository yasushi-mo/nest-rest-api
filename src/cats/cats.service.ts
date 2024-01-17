import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cat } from "./cat.entity";
import { CreateCatDTO } from "./create-cat.dto";

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async create(cat: CreateCatDTO): Promise<Cat> {
    const createdCat = this.catsRepository.create(cat);
    return this.catsRepository.save(createdCat);
  }
}
