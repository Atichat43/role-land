/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { BackendModule } from './app/backend.module';

async function bootstrap() {
  // const app = await NestFactory.create(BackendModule);
  // // const globalPrefix = 'api';
  // // app.setGlobalPrefix(globalPrefix);
  // const port = process.env.PORT || 3000;
  // await app.listen(port);
  // Logger.log(
  //   `🚀 Application is running on: http://localhost:${port}/`
  // );
  await NestFactory.createApplicationContext(BackendModule);
}

bootstrap();
