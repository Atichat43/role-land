import { Optional } from '@role-land/utility-types';
import { validate, ValidationError } from 'class-validator';

export type IClassValidationErrors = {
  property: string;
  message: string[];
};

export type IClassValidationDetails = {
  context: string;
  errors: IClassValidationErrors[];
};

export class ClassValidator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public static async validate<TTarget extends object>(
    target: TTarget,
    context?: string,
  ): Promise<Optional<IClassValidationDetails>> {
    let details: Optional<IClassValidationDetails>;
    const errors: ValidationError[] = await validate(target);

    if (errors.length > 0) {
      details = {
        context: context || target.constructor.name,
        errors: [],
      };

      for (const error of errors) {
        details.errors.push({
          property: error.property,
          message: error.constraints ? Object.values(error.constraints) : [],
        });
      }
    }

    return details;
  }
}
