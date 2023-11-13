import { Global, Module, Provider } from '@nestjs/common';
import { TypeOrmModule as NestJsTypeOrmModule } from '@nestjs/typeorm';
import {
  AuthProviderDiToken,
  CreateAuthProviderUseCaseService,
  GetAuthProviderUseCaseService,
} from '@role-land/core';
import {
  AuthProviderTypeOrmEntity,
  AuthProviderTypeOrmRepo,
} from '@role-land/infrastructure';
import { DataSource } from 'typeorm';

const persistenceProviders: Provider[] = [
  {
    provide: AuthProviderDiToken.AuthProviderRepo,
    useFactory: (dataSource) => new AuthProviderTypeOrmRepo(dataSource),
    inject: [DataSource],
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: AuthProviderDiToken.GetAuthProviderUseCase,
    useFactory: (authProviderRepo) =>
      new GetAuthProviderUseCaseService(authProviderRepo),
    inject: [AuthProviderDiToken.AuthProviderRepo],
  },
  {
    provide: AuthProviderDiToken.CreateAuthProviderUseCase,
    useFactory: (authProviderRepo) =>
      new CreateAuthProviderUseCaseService(authProviderRepo),
    inject: [AuthProviderDiToken.AuthProviderRepo],
  },
];

@Global()
@Module({
  imports: [NestJsTypeOrmModule.forFeature([AuthProviderTypeOrmEntity])],
  providers: [...persistenceProviders, ...useCaseProviders],
  exports: [
    AuthProviderDiToken.AuthProviderRepo,
    AuthProviderDiToken.GetAuthProviderUseCase,
    AuthProviderDiToken.CreateAuthProviderUseCase,
  ],
})
export class AuthProviderModule {}
