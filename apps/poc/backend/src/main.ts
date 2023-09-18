import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as requestIp from 'request-ip';

import { BackendModule } from './app/backend.module';

async function bootstrap() {
  const app = await NestFactory.create(BackendModule, {
    cors: true,
    logger: ['error', 'warn', 'log', 'debug'],
  });

  // whitelist: any extraneous properties that are not expected or defined in your DTO (Data Transfer Object) will be stripped
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // add a request.clientIp property to the request object
  app.use(requestIp.mw());

  // secure apps by setting various HTTP headers.
  app.use(helmet());

  const port = process.env.PORT;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/`);
}

bootstrap();
