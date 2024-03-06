import { Cat } from "src/cats/cat.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(() => Cat, (cat) => cat.owner)
  cats: Cat[];
}
