import { ErrorCode } from './error-code';
import { Exception } from './exception';

describe('Exception', () => {
  describe('new', () => {
    it('should create Exception instance with default parameters when input data & overrideMessage args are empty', () => {
      const exception: Exception<void> = Exception.new({
        code: ErrorCode.BAD_REQUEST_ERROR,
      });

      expect(exception.code).toBe(ErrorCode.BAD_REQUEST_ERROR.code);
      expect(exception.message).toBe(ErrorCode.BAD_REQUEST_ERROR.message);
      expect(exception.data).toBeUndefined();
    });

    it('should create custom Exception instance when input data & overrideMessage args are set', () => {
      const customMessage = 'Custom Internal Error.';
      const customData: Record<string, unknown> = {
        result: 'Custom Internal Error.',
      };

      const exception: Exception<Record<string, unknown>> = Exception.new({
        code: ErrorCode.BAD_REQUEST_ERROR,
        overrideMessage: customMessage,
        data: customData,
      });

      expect(exception.code).toBe(ErrorCode.BAD_REQUEST_ERROR.code);
      expect(exception.message).toBe(customMessage);
      expect(exception.data).toEqual(customData);
    });
  });
});
