import { Owner } from "src/owners/owner.entity";

export interface Cat {
  id: number;
  name: string;
  age: number;
  breed: string;
  owner?: Owner;
}
