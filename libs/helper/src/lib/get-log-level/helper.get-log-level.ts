import { LogLevel } from '@nestjs/common';

export function getLogLevel(logLevel = 'log'): LogLevel[] {
  switch (logLevel) {
    case 'error':
      return ['error'];
    case 'warn':
      return ['error', 'warn'];
    case 'log':
      return ['error', 'warn', 'log'];
    case 'debug':
      return ['error', 'warn', 'log', 'debug'];
    case 'verbose':
      return ['error', 'warn', 'log', 'debug', 'verbose'];
    default:
      return ['error', 'warn', 'log'];
  }
}
