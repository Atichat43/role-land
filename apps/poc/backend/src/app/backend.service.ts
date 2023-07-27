import { Injectable } from '@nestjs/common';

@Injectable()
export class BackendService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
