import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { BackendModule } from './app/backend.module';

async function bootstrap() {
  const app = await NestFactory.create(BackendModule, {
    logger: ['error', 'warn', 'log', 'debug'],
  });
  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/`);
  // await NestFactory.createApplicationContext(BackendModule);
}

bootstrap();
