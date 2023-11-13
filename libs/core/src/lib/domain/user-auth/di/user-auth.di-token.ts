export class UserAuthDiToken {
  // use-cases
  public static readonly GetUserAuthUseCase = Symbol('GetUserAuthUseCase');
  public static readonly CreateUserAuthUseCase = Symbol(
    'CreateUserAuthUseCase',
  );

  // handlers
  // repositories
  public static readonly UserAuthRepo = Symbol('UserAuthRepo');
}
