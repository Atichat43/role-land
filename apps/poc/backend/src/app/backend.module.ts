import { Module } from '@nestjs/common';

import { BackendService } from './backend.service';

@Module({
  imports: [],
  providers: [BackendService],
})
export class BackendModule {}
