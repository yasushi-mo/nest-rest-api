import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';

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

  @Get('path-parameters/:param')
  getPathParameters(@Param('param') param: string): string {
    return `PathParameter returns param: ${param}`;
  }

  @Get('request-object/:param')
  getRequestObject(@Req() request: Request): string {
    return `RequestObjectController returns path param:  ${JSON.stringify(
      request.params,
    )}, query param: ${JSON.stringify(request.query)}`;
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
