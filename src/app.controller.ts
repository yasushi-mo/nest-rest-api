import { Controller, Get } from '@nestjs/common';

@Controller('greetings')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello!';
  }

  @Get('good-morning')
  getHi(): string {
    return 'Good morning!';
  }
}

// import { AppService } from './app.service';

// constructor(private readonly appService: AppService) {}

// @Get()
// getHello(): string {
//   return this.appService.getHello();
// }
