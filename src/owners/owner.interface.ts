import { Cat } from "src/cats/cat.entity";

export interface Owner {
  id: number;
  name: string;
  age: number;
  cats: Cat[];
}
