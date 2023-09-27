import {
  applyDecorators,
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Code, EUserRole, Exception } from '@role-land/core';

import { HttpJwtAuthGuard } from '../passport/jwt';
import { IHttpAuthRequestWithUser } from '../type/http.auth.type';

@Injectable()
class HttpRoleAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public static readonly metadataKey: string = 'roles';

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles: EUserRole[] =
      this.reflector.get<EUserRole[]>(
        HttpRoleAuthGuard.metadataKey,
        context.getHandler(),
      ) || [];

    const request: IHttpAuthRequestWithUser = context
      .switchToHttp()
      .getRequest();

    const canActivate: boolean =
      roles.length > 0 ? roles.includes(request.user.role) : true;

    if (!canActivate) {
      throw Exception.new({ code: Code.ACCESS_DENIED_ERROR });
    }

    return canActivate;
  }
}

export const HttpAuthGuard = (
  ...roles: EUserRole[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): ((...args: any) => void) => {
  return applyDecorators(
    SetMetadata(HttpRoleAuthGuard.metadataKey, roles),
    UseGuards(HttpJwtAuthGuard, HttpRoleAuthGuard),
    UseGuards(HttpJwtAuthGuard),
  );
};
