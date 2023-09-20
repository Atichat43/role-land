import {
  isNumber,
  isUUID,
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

/**
 * @description
 * Checks if a value is a valid entity id (string: UUID or number: positive number based on the type).
 */
@ValidatorConstraint({ name: 'IsEntityId', async: false })
class IsEntityIdConstraint implements ValidatorConstraintInterface {
  validate(id: string | number): boolean {
    if (typeof id === 'string') {
      return isUUID(id);
    }

    if (typeof id === 'number') {
      return isNumber(id) && id > 0;
    }

    return false;
  }

  defaultMessage(): string {
    return 'Invalid entity id';
  }
}

export function IsEntityId(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEntityIdConstraint,
    });
  };
}
