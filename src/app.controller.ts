import { Controller, Get, Param } from '@nestjs/common';

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

  @Get(':name')
  getHelloWithName(@Param() params: { name: string }): string {
    console.log(params.name);
    return `Hello, ${params.name}!`;
  }
}

// import { AppService } from './app.service';

// constructor(private readonly appService: AppService) {}

// @Get()
// getHello(): string {
//   return this.appService.getHello();
// }
