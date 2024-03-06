import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cat } from "./cats/cat.entity";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { Owner } from "./owners/owner.entity";
import { OwnersController } from "./owners/owners.controller";
import { OwnersService } from "./owners/owners.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "password",
      database: "nest_app",
      entities: [Cat, Owner],
      synchronize: true,
      retryAttempts: 3,
    }),
    TypeOrmModule.forFeature([Cat, Owner]),
  ],
  controllers: [CatsController, OwnersController],
  providers: [CatsService, OwnersService],
})
export class AppModule {}
