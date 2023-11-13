import { Global, Module, Provider } from '@nestjs/common';
import { TypeOrmModule as NestJsTypeOrmModule } from '@nestjs/typeorm';
import {
  CreateUserAuthUseCaseService,
  GetUserAuthUseCaseService,
  UserAuthDiToken,
} from '@role-land/core';
import {
  UserAuthTypeOrmEntity,
  UserAuthTypeOrmRepo,
} from '@role-land/infrastructure';
import { DataSource } from 'typeorm';

const persistenceProviders: Provider[] = [
  {
    provide: UserAuthDiToken.UserAuthRepo,
    useFactory: (dataSource) => new UserAuthTypeOrmRepo(dataSource),
    inject: [DataSource],
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: UserAuthDiToken.GetUserAuthUseCase,
    useFactory: (userAuthRepo) => new GetUserAuthUseCaseService(userAuthRepo),
    inject: [UserAuthDiToken.UserAuthRepo],
  },
  {
    provide: UserAuthDiToken.CreateUserAuthUseCase,
    useFactory: (userAuthRepo) =>
      new CreateUserAuthUseCaseService(userAuthRepo),
    inject: [UserAuthDiToken.UserAuthRepo],
  },
];

@Global()
@Module({
  imports: [NestJsTypeOrmModule.forFeature([UserAuthTypeOrmEntity])],
  providers: [...persistenceProviders, ...useCaseProviders],
  exports: [
    UserAuthDiToken.UserAuthRepo,
    UserAuthDiToken.GetUserAuthUseCase,
    UserAuthDiToken.CreateUserAuthUseCase,
  ],
})
export class UserAuthModule {}
