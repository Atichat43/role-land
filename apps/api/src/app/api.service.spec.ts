import { Test } from '@nestjs/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ApiService],
    }).compile();

    service = app.get<ApiService>(ApiService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
