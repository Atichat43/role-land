import { ServerApplication } from './server-application';

async function bootstrap() {
  const serverApplication: ServerApplication = ServerApplication.new();
  await serverApplication.run();
}

bootstrap();
