import {
  Controller,
  Post,
  Res,
  HttpStatus,
  Body,
  UseInterceptors,
  HttpCode,
} from '@nestjs/common';

import { AppService } from './app.service';
import { Response } from 'express';
import { CredentialInterceptor } from './interceptor/credential.interceptor';
@Controller()
export class AuthenticationController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(CredentialInterceptor)
  @Post('login')
  @HttpCode(200)
  async login(@Res() response: Response, @Body() body: any) {
    response.status(HttpStatus.OK).json(await this.appService.getHello());
  }
}
