import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

describe('HttpExceptionFilter', () => {
  it('should format error response', () => {
    const filter = new HttpExceptionFilter();
    const mockJson = jest.fn();
    const mockStatus = jest.fn(() => ({ json: mockJson }));
    const mockGetResponse = jest.fn(() => ({ status: mockStatus }));
    const mockGetRequest = jest.fn(() => ({ method: 'GET', url: '/test' }));
    const mockSwitchToHttp = jest.fn(() => ({
      getResponse: mockGetResponse,
      getRequest: mockGetRequest,
    }));
    const mockHost = {
      switchToHttp: mockSwitchToHttp,
    } as unknown as ArgumentsHost;
    const exception = new HttpException('Test error', HttpStatus.BAD_REQUEST);
    filter.catch(exception, mockHost);
    expect(mockStatus).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST);
    expect(mockJson).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: HttpStatus.BAD_REQUEST,
        path: '/test',
        message: 'Test error',
      }),
    );
  });
});
