import { Injectable } from '@nestjs/common';

@Injectable()
export class BackendService {
  onModuleInit() {
    console.log('The BackendService module has been initialized.');
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
