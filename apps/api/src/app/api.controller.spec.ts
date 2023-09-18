import { Test, TestingModule } from '@nestjs/testing';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

describe('ApiController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ApiService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const apiController = app.get<ApiController>(ApiController);
      expect(apiController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
