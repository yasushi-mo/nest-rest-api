import { Owner } from "src/owners/owner.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("cats")
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 30,
    nullable: false,
  })
  name: string;

  @Column({
    type: "int",
    nullable: false,
  })
  age: number;

  @Column({
    type: "varchar",
    length: 30,
    nullable: false,
  })
  breed: string;

  @ManyToOne(() => Owner, (owner) => owner.cats)
  owner: Owner;
}
