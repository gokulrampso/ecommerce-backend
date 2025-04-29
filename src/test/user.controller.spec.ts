import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user/user.controller';
import { UserService } from '../user/user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            register: jest.fn().mockResolvedValue({ message: 'ok' }),
            login: jest.fn().mockResolvedValue({ accessToken: 'token' }),
            updateProfile: jest.fn().mockResolvedValue({ message: 'ok' }),
            forgotPassword: jest.fn().mockResolvedValue({ message: 'ok' }),
            resetPassword: jest.fn().mockResolvedValue({ message: 'ok' }),
          },
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .compile();
    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should register', async () => {
    expect(await controller.register({} as any)).toHaveProperty('message');
  });
  it('should login', async () => {
    expect(await controller.login({} as any)).toHaveProperty('accessToken');
  });
  it('should update profile', async () => {
    expect(
      await controller.updateProfile({ user: { userId: 'id' } } as any, {}),
    ).toHaveProperty('message');
  });
  it('should forgot password', async () => {
    expect(await controller.forgotPassword({} as any)).toHaveProperty(
      'message',
    );
  });
  it('should reset password', async () => {
    expect(await controller.resetPassword({} as any)).toHaveProperty('message');
  });
});
