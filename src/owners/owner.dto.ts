import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsString, Length } from "class-validator";

export class OwnerDTO {
  @ApiProperty()
  @IsString()
  @Length(1, 30)
  name: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty({ type: [Number] })
  @IsArray()
  catIds: number[];
}
