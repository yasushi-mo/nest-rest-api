import { Injectable } from '@nestjs/common';
import { CatsService } from './services/cats.service';

@Injectable()
export class AppService {
  constructor(private catsService: CatsService) {}

  getHello(): string {
    return 'Hello World!';
  }
}
