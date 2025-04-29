import * as nestCore from '@nestjs/core';
import * as swagger from '@nestjs/swagger';
import * as helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';

describe('main.ts bootstrap', () => {
  let createSpy: jest.SpyInstance;
  let listenSpy: jest.SpyInstance;
  let enableCorsSpy: jest.SpyInstance;
  let useSpy: jest.SpyInstance;
  let useGlobalPipesSpy: jest.SpyInstance;
  let setupSpy: jest.SpyInstance;
  let createDocumentSpy: jest.SpyInstance;

  beforeAll(() => {
    const appMock = {
      enableCors: jest.fn(),
      use: jest.fn(),
      useGlobalPipes: jest.fn(),
      listen: jest.fn().mockResolvedValue(undefined),
    };
    createSpy = jest.spyOn(nestCore.NestFactory, 'create').mockResolvedValue(appMock as any);
    enableCorsSpy = jest.spyOn(appMock, 'enableCors');
    useSpy = jest.spyOn(appMock, 'use');
    useGlobalPipesSpy = jest.spyOn(appMock, 'useGlobalPipes');
    listenSpy = jest.spyOn(appMock, 'listen');
    setupSpy = jest.spyOn(swagger.SwaggerModule, 'setup').mockImplementation();
    createDocumentSpy = jest.spyOn(swagger.SwaggerModule, 'createDocument').mockReturnValue({} as any);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should bootstrap the app and call all setup methods', async () => {
    jest.isolateModules(async () => {
      await import('../main');
      expect(createSpy).toHaveBeenCalled();
      expect(enableCorsSpy).toHaveBeenCalled();
      expect(useSpy).toHaveBeenCalled();
      expect(useGlobalPipesSpy).toHaveBeenCalledWith(expect.any(ValidationPipe));
      expect(createDocumentSpy).toHaveBeenCalled();
      expect(setupSpy).toHaveBeenCalled();
      expect(listenSpy).toHaveBeenCalled();
    });
  });
}); 