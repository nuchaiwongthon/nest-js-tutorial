import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AuthenticationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationController],
      providers: [AppService],
    }).compile();

    appController = app.get<AuthenticationController>(AuthenticationController);
  });

  describe('root', () => {
    // it('should return "Hello World!"', () => {
    //   expect(appController.getHello()).toBe('Hello World!');
    // });
  });
});
