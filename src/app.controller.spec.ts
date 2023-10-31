import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "RootController"', () => {
      expect(appController.getRoot()).toBe('RootController');
    });

    it('should return "MethodController"', () => {
      expect(appController.getMethod()).toBe('MethodController');
    });

    it('should return "WildCardController"', () => {
      expect(appController.getWildCard()).toBe('WildCardController');
    });
  });
});
