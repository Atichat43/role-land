import {
  Logger,
  LogLevel,
  NestApplicationOptions,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { getLogLevels } from '@role-land/helper';
import helmet from 'helmet';
import * as requestIp from 'request-ip';

import { BackendModule } from './app/backend.module';

export class ServerApplication {
  private readonly logger: Logger = new Logger(ServerApplication.name);

  private readonly host: string = process.env.HOST;

  private readonly port: number = Number(process.env.PORT);

  private readonly logLevels: LogLevel[] = getLogLevels(
    process.env.LOG_LEVEL ?? 'log',
  );

  public static new(): ServerApplication {
    return new ServerApplication();
  }

  private configureAppMiddleware = (app: NestExpressApplication): void => {
    // enable validation globally
    const validationPipeOptions: ValidationPipeOptions = {
      whitelist: true, // any extraneous properties that are not expected or defined in your DTO (Data Transfer Object) will be stripped
      transform: true,
    };
    app.useGlobalPipes(new ValidationPipe(validationPipeOptions));

    // add a request.clientIp property to the request object
    app.use(requestIp.mw());

    // secure apps by setting various HTTP headers.
    app.use(helmet());
  };

  private buildApiDocumentation(app: NestExpressApplication): void {
    const title = 'Role Land API';
    const description = 'Role Land API description';
    const version = '1.0';
    const path = 'api';

    const options: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .addBearerAuth()
      .build();

    const document: OpenAPIObject = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(path, app, document);

    const message = `📚 API documentation is available on: http://${this.host}:${this.port}/${path}`;
    this.logger.log(message);
  }

  public async run(): Promise<void> {
    const appOptions: NestApplicationOptions = {
      cors: true,
      logger: this.logLevels,
    };
    const app: NestExpressApplication =
      await NestFactory.create<NestExpressApplication>(
        BackendModule,
        appOptions,
      );

    this.configureAppMiddleware(app);
    this.buildApiDocumentation(app);

    await app.listen(this.port, this.host);

    this.logger.log(
      `🚀 Application is running on: http://${this.host}:${this.port}/`,
    );
    this.logger.log(
      `👾 Discord Login: http://${this.host}:${this.port}/auth/discord/login`,
    );
  }
}
