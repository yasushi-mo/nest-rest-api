import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats.module';
import { CatsService } from './services/cats.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule {}
