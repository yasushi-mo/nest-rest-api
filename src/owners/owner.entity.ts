import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("owners")
export class Owner {
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
}
