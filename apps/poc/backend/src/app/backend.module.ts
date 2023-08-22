import { Module } from '@nestjs/common';
import { AuthDevModule, AuthEnvConfig, AuthModule } from '@role-land/auth';
import { ConfigModule } from '@role-land/config';

@Module({
  imports: [ConfigModule.forRoot([AuthEnvConfig]), AuthDevModule],
})
export class BackendModule {
  constructor() {
    // console.log('BackendModule', process.env.AUTH_PRIVATE_KEY);
  }
}
