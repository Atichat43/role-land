import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { request, spec } from 'pactum';

import { BackendModule } from './backend.module';

describe('Backend', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const modRef = await Test.createTestingModule({
      imports: [BackendModule],
    }).compile();
    app = modRef.createNestApplication();

    await app.listen(0);

    // http://[::1]:<PORT>
    const url = (await app.getUrl()).replace('[::1]', 'localhost');
    request.setBaseUrl(url);
  });

  describe(`Health Check`, () => {
    it('should return 200', async () => {
      await spec().get('/').expectStatus(HttpStatus.OK);
    });
  });
});
