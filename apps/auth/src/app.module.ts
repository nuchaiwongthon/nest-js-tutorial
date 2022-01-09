import { Module } from '@nestjs/common';
import { AuthenticationController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AuthenticationController],
  providers: [AppService],
})
export class AppModule {}
