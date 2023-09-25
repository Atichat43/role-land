import { Module } from '@nestjs/common';

import { HttpUserController } from './http.user.controller';

const persistenceProviders = [];

@Module({
  controllers: [HttpUserController],
  providers: [
    ...persistenceProviders,
  ],
})
export class HttpUserModule {}
