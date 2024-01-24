import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OwnerDTO } from "./owner.dto";
import { Owner } from "./owner.entity";

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private ownersRepository: Repository<Owner>,
  ) {}

  async findAll(): Promise<Owner[]> {
    return this.ownersRepository.find();
  }

  async findOne(id: number): Promise<Owner | null> {
    return this.ownersRepository.findOne({ where: { id } }) || null;
  }

  async create(owner: OwnerDTO): Promise<Owner> {
    const createdOwner = this.ownersRepository.create(owner);
    return this.ownersRepository.save(createdOwner);
  }

  async update(id: number, owner: OwnerDTO): Promise<Owner | null> {
    await this.ownersRepository.update(id, owner);
    return this.ownersRepository.findOne({ where: { id } }) || null;
  }

  async delete(id: number): Promise<void> {
    await this.ownersRepository.delete(id);
  }
}
