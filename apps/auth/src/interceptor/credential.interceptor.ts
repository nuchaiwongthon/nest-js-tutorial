import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

@Injectable()
export class CredentialInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const { username, password } = request.body;

    if (username && password) {
      return next.handle();
    } else {
      throw new HttpException('Login data incorrect.', HttpStatus.NOT_FOUND);
    }
  }
}
