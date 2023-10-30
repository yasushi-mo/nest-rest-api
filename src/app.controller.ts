import { Controller, Get, Param, Query, Req } from '@nestjs/common';
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
    return `PathParameterController returns param: ${param}`;
  }

  @Get('request-object/:param')
  getRequestObject(@Req() request: Request): string {
    return `RequestObjectController returns path param:  ${JSON.stringify(
      request.params,
    )}, query param: ${JSON.stringify(request.query)}`;
  }

  @Get('query-parameters')
  getQueryParameters(@Query() param: string): string {
    return `QueryParametersController returns param: ${JSON.stringify(param)}`;
  }
}
