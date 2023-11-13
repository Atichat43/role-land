export class AuthProviderDiToken {
  // use-cases
  public static readonly GetAuthProviderUseCase = Symbol(
    'GetAuthProviderUseCase',
  );
  public static readonly CreateAuthProviderUseCase = Symbol(
    'CreateAuthProviderUseCase',
  );

  // handlers
  // repositories
  public static readonly AuthProviderRepo = Symbol('AuthProviderRepo');
}
