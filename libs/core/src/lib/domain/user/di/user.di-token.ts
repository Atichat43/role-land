export class UserDiToken {
  // use-cases
  public static readonly GetUserUseCase = Symbol('GetUserUseCase');
  public static readonly CreateUserUseCase = Symbol('CreateUserUseCase');

  // handlers

  // repositories
  public static readonly UserRepo = Symbol('UserRepo');
}
