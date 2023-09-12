import { Controller, Get } from '@nestjs/common';

@Controller('greetings')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello!';
  }

  @Get('good-morning')
  getGoodMorning(): string {
    return 'Good morning!';
  }

  @Get('ab*cd')
  getWildcard(): string {
    return 'This route uses a wildcard';
  }
}

// import { AppService } from './app.service';

// constructor(private readonly appService: AppService) {}

// @Get()
// getHello(): string {
//   return this.appService.getHello();
// }
