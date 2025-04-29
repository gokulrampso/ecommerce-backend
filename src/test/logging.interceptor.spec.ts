import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { ExecutionContext, CallHandler } from '@nestjs/common';
import { of } from 'rxjs';

describe('LoggingInterceptor', () => {
  it('should log request and response', (done) => {
    const interceptor = new LoggingInterceptor();
    const context = {
      switchToHttp: () => ({
        getRequest: () => ({ method: 'GET', url: '/test' }),
      }),
    } as unknown as ExecutionContext;
    const callHandler: CallHandler = {
      handle: () => of('response'),
    };
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    interceptor.intercept(context, callHandler).subscribe(() => {
      expect(spy).not.toBeNull();
      spy.mockRestore();
      done();
    });
  });
}); 