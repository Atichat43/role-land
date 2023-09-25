import { ClassValidator, IClassValidationDetails } from '@role-land/helper';
import { isUndefined, Optional } from '@role-land/utility-types';

import { Code } from '../code';
import { Exception } from '../exception';

export class ValueObject {
  public async validate(): Promise<void> {
    const details: Optional<IClassValidationDetails> =
      await ClassValidator.validate(this);

    if (!isUndefined(details)) {
      throw Exception.new({
        code: Code.VALUE_OBJECT_VALIDATION_ERROR,
        data: details,
      });
    }
  }
}
