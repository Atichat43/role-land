import { UserUseCaseDto } from '@role-land/core';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

import { HttpApiModelUserCreateEndUserAccountBody } from '../api-model';

export class CreateEndUserAccountDtoBody
  implements HttpApiModelUserCreateEndUserAccountBody
{
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export type CreateEndUserAccountDtoResponseData = Pick<UserUseCaseDto, 'id'>;
