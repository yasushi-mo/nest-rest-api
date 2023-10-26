import { Controller, Get, Param } from '@nestjs/common';

@Controller('controllers')
export class AppController {
  @Get()
  getRoot(): string {
    return 'RootController';
  }

  @Get('method')
  getMethod(): string {
    return 'MethodController';
  }

  @Get('wild*card')
  getWildCard(): string {
    return 'WildCardController';
  }

  @Get('route-parameters/:param')
  getRouteParameters(@Param('param') param: string): string {
    return `RouteParameter return param: ${param}`;
  }
}

// @Get('good-morning/:name')
// getGoodMorningWithName(@Param() params: { name: string }): string {
//   console.log(params);
//   return `Good morning, ${params.name}!`;
// }

// @Get('good-morning/request')
// getGoodMorningRequest(@Req() request: Request): string {
//   console.log(request);
//   return 'good-morning/request';
// }

// @Get('good-afternoon/query')
// getGoodAfternoonQuery(@Req() request: Request): string {
//   return `${request}`;
// }

// @Post('good-afternoon/body')
// postGoodAfternoon(@Body('name') name: string): string {
//   return `Good afternoon, ${name}!`;
// }
