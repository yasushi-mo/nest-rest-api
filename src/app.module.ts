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
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
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
