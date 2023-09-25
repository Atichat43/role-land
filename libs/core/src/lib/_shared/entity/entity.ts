import { ClassValidator, IClassValidationDetails } from '@role-land/helper';
import { isUndefined, Optional } from '@role-land/utility-types';

import { IsEntityId } from '../decorator';
import { ErrorCode } from '../error/error-code';
import { Exception } from '../error/exception';

export class Entity<TIdentifier extends string | number> {
  @IsEntityId()
  id: TIdentifier;

  public async validate(): Promise<void> {
    const details: Optional<IClassValidationDetails> =
      await ClassValidator.validate(this);

    if (!isUndefined(details)) {
      throw Exception.new({
        code: ErrorCode.ENTITY_VALIDATION_ERROR,
        data: details,
      });
    }
  }
}
