import { IUseCase } from '../../../_shared/use-case';
import { IGetUserAuthPort } from '../port';
import { UserAuthUseCaseDto } from './dto';

export type IGetUserAuthUseCase = IUseCase<
  IGetUserAuthPort,
  UserAuthUseCaseDto
>;
