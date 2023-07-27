import { Test } from '@nestjs/testing';

import { BackendService } from './backend.service';

describe('BackendService', () => {
  let service: BackendService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [BackendService],
    }).compile();

    service = app.get<BackendService>(BackendService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
