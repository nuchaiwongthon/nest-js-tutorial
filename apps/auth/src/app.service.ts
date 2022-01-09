import { Injectable } from '@nestjs/common';
interface response {
  statusCode: number;
  data: any;
}
@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const prepare: response = {
      statusCode: 200,
      data: 'Hello World',
    };
    return prepare;
  }
}
