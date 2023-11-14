import { Module } from '@nestjs/common';

import { HttpAuthService } from '../../http.auth.service';
import { HttpAuthSessionSerializer } from './http.auth.passport.session-serializer';

@Module({
  providers: [HttpAuthService, HttpAuthSessionSerializer],
})
export class HttpAuthPassportSessionSerializerModule {}
