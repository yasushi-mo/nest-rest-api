import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
