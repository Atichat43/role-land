import { ApiProperty } from '@nestjs/swagger';
import { Code } from '@role-land/core';

export abstract class HttpApiModelBaseResponse {
  @ApiProperty({
    type: 'number',
    default: Code.SUCCESS.code,
    description: 'HTTP status code (default of SUCCESS)',
  })
  public code: number;

  @ApiProperty({
    type: 'string',
    default: Code.SUCCESS.message,
    description: 'HTTP status message (default of SUCCESS)',
  })
  public message: string;

  @ApiProperty({
    type: 'number',
    default: 1695772800000,
    description: 'timestamp in ms (default of 2023-09-27T00:00:00.000Z)',
  })
  public timestamp: number;

  @ApiProperty({ type: 'object' })
  public data: unknown;
}
