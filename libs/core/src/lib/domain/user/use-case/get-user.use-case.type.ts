import { IUseCase } from '../../../_shared/use-case';
import { IGetUserPort } from '../port/use-case';
import { UserUseCaseDto } from './dto';

export type IGetUserUseCase = IUseCase<IGetUserPort, UserUseCaseDto>;
