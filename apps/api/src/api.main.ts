import { ServerApplication } from './api.server-application';

async function bootstrap() {
  const serverApplication: ServerApplication = ServerApplication.new();
  await serverApplication.run();
}

bootstrap();
