import { IUseCase } from '../../../_shared/use-case';
import { ICreateAuthProviderPort } from '../port';
import { AuthProviderUseCaseDto } from './dto';

export type ICreateAuthProviderUseCase = IUseCase<
  ICreateAuthProviderPort,
  AuthProviderUseCaseDto
>;
