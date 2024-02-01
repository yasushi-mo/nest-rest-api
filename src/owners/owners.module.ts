import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Owner } from "./owner.entity";
import { OwnersController } from "./owners.controller";
import { OwnersService } from "./owners.service";

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [OwnersService],
  controllers: [OwnersController],
  exports: [OwnersService],
})
export class OwnersModule {}
