import { IUseCase } from '../../../_shared/use-case';
import { ICreateUserAuthPort } from '../port';
import { UserAuthUseCaseDto } from './dto';

export type ICreateUserAuthUseCase = IUseCase<
  ICreateUserAuthPort,
  UserAuthUseCaseDto
>;
