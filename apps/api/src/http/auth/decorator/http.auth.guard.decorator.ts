import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { EUserRole } from '@role-land/core';

import { HttpJwtAuthGuard } from '../passport/jwt';

export const HttpAuthGuard = (
  ...roles: EUserRole[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): ((...args: any) => void) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    // UseGuards(HttpJwtAuthGuard, HttpRoleAuthGuard), // TODO: implement HttpRoleAuthGuard
    UseGuards(HttpJwtAuthGuard),
  );
};
