import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BackendService {
  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    console.log('The BackendService module has been initialized.');
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
