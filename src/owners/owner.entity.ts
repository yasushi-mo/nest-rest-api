import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("owners")
export class Owners {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 30,
    nullable: false,
  })
  name: string;

  @Column({
    type: "date",
    nullable: false,
  })
  dateOfBirth: Date;
}
