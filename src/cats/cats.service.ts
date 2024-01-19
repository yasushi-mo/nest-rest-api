import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CatDTO } from "./cat.dto";
import { Cat } from "./cat.entity";

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async findOne(id: number): Promise<Cat | null> {
    return this.catsRepository.findOne({ where: { id } }) || null;
  }

  async create(cat: CatDTO): Promise<Cat> {
    const createdCat = this.catsRepository.create(cat);
    return this.catsRepository.save(createdCat);
  }

  async update(id: number, cat: CatDTO): Promise<Cat | null> {
    await this.catsRepository.update(id, cat);
    return this.catsRepository.findOne({ where: { id } }) || null;
  }

  async delete(id: number): Promise<void> {
    await this.catsRepository.delete(id);
  }
}
