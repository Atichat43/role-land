import { LogLevel } from '@nestjs/common';

import { getLogLevels } from './helper.get-log-levels';

describe('getLogLevels', () => {
  it('should return only error level for logLevel "error"', () => {
    const result: LogLevel[] = getLogLevels('error');
    expect(result).toStrictEqual(['error']);
  });

  it('should return error and warn levels for logLevel "warn"', () => {
    const result: LogLevel[] = getLogLevels('warn');
    expect(result).toStrictEqual(['error', 'warn']);
  });

  it('should return error, warn, and log levels for logLevel "log"', () => {
    const result: LogLevel[] = getLogLevels('log');
    expect(result).toStrictEqual(['error', 'warn', 'log']);
  });

  it('should return error, warn, log, and debug levels for logLevel "debug"', () => {
    const result: LogLevel[] = getLogLevels('debug');
    expect(result).toStrictEqual(['error', 'warn', 'log', 'debug']);
  });

  it('should return all levels for logLevel "verbose"', () => {
    const result: LogLevel[] = getLogLevels('verbose');
    expect(result).toStrictEqual(['error', 'warn', 'log', 'debug', 'verbose']);
  });

  it('should return error, warn, and log levels for any other logLevel', () => {
    const result: LogLevel[] = getLogLevels('anyOtherValue');
    expect(result).toStrictEqual(['error', 'warn', 'log']);
  });
});
