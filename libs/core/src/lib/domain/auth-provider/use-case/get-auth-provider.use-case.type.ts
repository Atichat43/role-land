import { IUseCase } from '../../../_shared/use-case';
import { IGetAuthProviderPort } from '../port';
import { AuthProviderUseCaseDto } from './dto';

export type IGetAuthProviderUseCase = IUseCase<
  IGetAuthProviderPort,
  AuthProviderUseCaseDto
>;
