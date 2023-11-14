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
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';
import * as requestIp from 'request-ip';

import { ApiEnvConfig } from './api.env.config';
import { ApiModule } from './api.module';

export class ServerApplication {
  private readonly logger: Logger = new Logger(ServerApplication.name);

  private readonly host: string = ApiEnvConfig.HOST;

  private readonly port: number = ApiEnvConfig.PORT;

  private readonly logLevels: LogLevel[] = ApiEnvConfig.LOG_LEVELS;

  public static new(): ServerApplication {
    return new ServerApplication();
  }

  private configureAppMiddleware = (app: NestExpressApplication): void => {
    // enable validation globally
    const validationPipeOptions: ValidationPipeOptions = {
      transform: true,
      whitelist: true, // strip extraneous data
      forbidNonWhitelisted: true, // throw an error if extraneous data is found
    };
    app.useGlobalPipes(new ValidationPipe(validationPipeOptions));

    // add a request.clientIp property to the request object
    app.use(requestIp.mw());

    // secure apps by setting various HTTP headers.
    app.use(helmet());
  };

  private configureAppSessionMiddleware = (
    app: NestExpressApplication,
  ): void => {
    app.use(
      session({
        name: 'role-land.sid',
        cookie: {
          maxAge: 24 * 60 * 60 * 1000, // 1 day
        },
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
      }),
    );

    app.use(passport.initialize());
    app.use(passport.session());
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
      cors: {
        origin: [`http://${this.host}:${this.port}`],
      },
      logger: this.logLevels,
    };
    const app: NestExpressApplication =
      await NestFactory.create<NestExpressApplication>(ApiModule, appOptions);

    this.configureAppMiddleware(app);
    this.configureAppSessionMiddleware(app);
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
