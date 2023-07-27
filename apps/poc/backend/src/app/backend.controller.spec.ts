import { Test, TestingModule } from '@nestjs/testing';

import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';

describe('BackendController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [BackendController],
      providers: [BackendService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const backendController = app.get<BackendController>(BackendController);
      expect(backendController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
