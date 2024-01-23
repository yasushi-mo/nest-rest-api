import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, Length } from "class-validator";

export class OwnerDTO {
  @ApiProperty()
  @IsString()
  @Length(1, 30)
  name: string;

  @ApiProperty()
  @IsDate()
  dateOfBirth: Date;
}
