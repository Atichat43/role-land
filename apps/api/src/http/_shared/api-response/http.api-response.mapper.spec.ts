import { HttpApiResponseMapper } from './http.api-response.mapper';

describe('HttpApiResponseMapper', () => {
  describe('success', () => {
    it('should create success response with default parameters when input args are empty', () => {
      const currentDate: number = Date.now();

      const response: HttpApiResponseMapper<unknown> =
        HttpApiResponseMapper.success();

      expect(response.code).toBe(200);
      expect(response.message).toBe('Success.');
      expect(response.timestamp).toBeGreaterThanOrEqual(currentDate - 5000);
      expect(response.data).toBeNull();
    });

    it('should create success response with custom parameters when input args are set', () => {
      const currentDate: number = Date.now();

      const customMessage = 'Success Response.';
      const customData: Record<string, unknown> = { result: customMessage };

      const response: HttpApiResponseMapper<unknown> =
        HttpApiResponseMapper.success(customData, customMessage);

      expect(response.code).toBe(200);
      expect(response.message).toBe(customMessage);
      expect(response.timestamp).toBeGreaterThanOrEqual(currentDate - 5000);
      expect(response.data).toEqual(customData);
    });
  });

  describe('error', () => {
    it('should create error response with default parameters when input args are empty', () => {
      const currentDate: number = Date.now();

      const response: HttpApiResponseMapper<unknown> =
        HttpApiResponseMapper.error();

      expect(response.code).toBe(500);
      expect(response.message).toBe('Internal error.');
      expect(response.timestamp).toBeGreaterThanOrEqual(currentDate - 5000);
      expect(response.data).toBeNull();
    });

    it('should create error response with custom parameters when input args are set', () => {
      const currentDate: number = Date.now();

      const customCode = 404;
      const customMessage = 'Resource not found.';
      const customData: Record<string, unknown> = { result: customMessage };

      const response: HttpApiResponseMapper<unknown> =
        HttpApiResponseMapper.error(customCode, customMessage, customData);

      expect(response.code).toBe(customCode);
      expect(response.message).toBe(customMessage);
      expect(response.timestamp).toBeGreaterThanOrEqual(currentDate - 5000);
      expect(response.data).toEqual(customData);
    });
  });
});
