import { Module, Provider } from '@nestjs/common';
import { GetUserUseCaseService, UserDiToken } from '@role-land/core';

class MockUserRepo {
  constructor() {
    console.log('MockUserRepo constructor');
  }

  findUser() {
    console.log('MockUserRepo findUser');
  }
}

const persistenceProviders: Provider[] = [
  {
    provide: UserDiToken.UserRepo,
    useFactory: () => new MockUserRepo(),
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: UserDiToken.GetUserUseCase,
    useFactory: (userRepo) => new GetUserUseCaseService(userRepo),
    inject: [UserDiToken.UserRepo],
  },
];

@Module({
  providers: [...persistenceProviders, ...useCaseProviders],
  exports: [UserDiToken.UserRepo, UserDiToken.GetUserUseCase],
})
export class UserModule {}
