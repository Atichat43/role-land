import { Global, Module, Provider } from '@nestjs/common';
import { TypeOrmModule as NestJsTypeOrmModule } from '@nestjs/typeorm';
import {
  CreateUserUseCaseService,
  GetUserUseCaseService,
  UserDiToken,
} from '@role-land/core';
import { UserTypeOrmEntity, UserTypeOrmRepo } from '@role-land/infrastructure';
import { DataSource } from 'typeorm';

const persistenceProviders: Provider[] = [
  {
    provide: UserDiToken.UserRepo,
    useFactory: (dataSource) => new UserTypeOrmRepo(dataSource),
    inject: [DataSource],
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: UserDiToken.GetUserUseCase,
    useFactory: (userRepo) => new GetUserUseCaseService(userRepo),
    inject: [UserDiToken.UserRepo],
  },
  {
    provide: UserDiToken.CreateUserUseCase,
    useFactory: (userRepo) => new CreateUserUseCaseService(userRepo),
    inject: [UserDiToken.UserRepo],
  },
];

@Global()
@Module({
  imports: [NestJsTypeOrmModule.forFeature([UserTypeOrmEntity])],
  providers: [...persistenceProviders, ...useCaseProviders],
  exports: [
    UserDiToken.UserRepo,
    UserDiToken.GetUserUseCase,
    UserDiToken.CreateUserUseCase,
  ],
})
export class UserModule {}
