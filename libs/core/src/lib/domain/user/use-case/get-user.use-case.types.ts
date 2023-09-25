import { IUseCase } from '../../../_shared/use-case';
import { IGetUserPort } from '../port/use-case';
import { UserUseCaseDto } from './dto';

// TODO: might move to port
export type IGetUserUseCase = IUseCase<IGetUserPort, UserUseCaseDto>;
