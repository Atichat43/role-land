import { IUseCase } from '../../../_shared/use-case';
import { ICreateUserPort } from '../port';
import { UserUseCaseDto } from './dto';

export type ICreateUserUseCase = IUseCase<ICreateUserPort, UserUseCaseDto>;
