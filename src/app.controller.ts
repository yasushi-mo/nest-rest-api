import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

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

  @Get('/hello/:name')
  getHelloWithName(@Param('name') name: string): string {
    console.log(name);
    return `Hello, ${name}!`;
  }

  @Get('good-morning/:name')
  getGoodMorningWithName(@Param() params: { name: string }): string {
    console.log(params);
    return `Good morning, ${params.name}!`;
  }

  @Get('good-afternoon/request')
  getGoodAfternoonRequest(@Req() request: Request): string {
    console.log(request);
    return `${request}`;
  }

  @Get('good-afternoon/query')
  getGoodAfternoonQuery(@Req() request: Request): string {
    return `${request}`;
  }

  @Post('good-afternoon/body')
  postGoodAfternoon(@Body('name') name: string): string {
    return `Good afternoon, ${name}!`;
  }
}

// import { AppService } from './app.service';

// constructor(private readonly appService: AppService) {}

// @Get()
// getHello(): string {
//   return this.appService.getHello();
// }
