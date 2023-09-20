// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { JwtModule } from '@nestjs/jwt';

// import {
//   JwtEnvConfig,
//   jwtEnvConfigTokenSymbol,
//   registerJwtEnvConfig,
// } from './http.auth.passport.jwt.env-config';
// import { HttpAuthService } from './http.auth.service';
// import { HttpAuthJwtStrategy } from './passport/jwt';
// import { HttpAuthLocalStrategy } from './passport/local';

// @Module({
//   imports: [
//     JwtModule.registerAsync({
//       imports: [ConfigModule.forFeature(registerJwtEnvConfig())],
//       useFactory: async (configService: ConfigService) => {
//         const config = configService.getOrThrow<JwtEnvConfig>(
//           jwtEnvConfigTokenSymbol.toString(),
//         );

//         return {
//           secret: config.secret,
//           signOptions: { expiresIn: config.expiresIn },
//         };
//       },
//       inject: [ConfigService],
//     }),
//   ],
//   exports: [],
//   providers: [HttpAuthService, HttpAuthLocalStrategy, HttpAuthJwtStrategy],
// })
// export class HttpAuthModule {}
