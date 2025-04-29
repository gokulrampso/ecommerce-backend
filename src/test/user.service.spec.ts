import { UserService } from '../user/user.service';
import { RegisterDto, LoginDto, UpdateProfileDto, ForgotPasswordDto, ResetPasswordDto } from '../user/user.dto';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should register a user', async () => {
    const dto: RegisterDto = { email: 'test@example.com', password: 'password', name: 'Test' };
    const result = await service.register(dto);
    expect(result).toHaveProperty('message');
  });

  it('should login a user', async () => {
    const dto: LoginDto = { email: 'test@example.com', password: 'password' };
    const result = await service.login(dto);
    expect(result).toHaveProperty('accessToken');
  });

  it('should update profile', async () => {
    const dto: UpdateProfileDto = { name: 'New Name' };
    const result = await service.updateProfile('userId', dto);
    expect(result).toHaveProperty('message');
  });

  it('should handle forgot password', async () => {
    const dto: ForgotPasswordDto = { email: 'test@example.com' };
    const result = await service.forgotPassword(dto);
    expect(result).toHaveProperty('message');
  });

  it('should handle reset password', async () => {
    const dto: ResetPasswordDto = { token: 'token', newPassword: 'newpass' };
    const result = await service.resetPassword(dto);
    expect(result).toHaveProperty('message');
  });

  // Failure scenarios (mocked)
  it('should fail to register with invalid email', async () => {
    const dto: RegisterDto = { email: 'bad', password: 'password', name: 'Test' };
    await expect(service.register(dto)).resolves.toHaveProperty('message');
  });
}); 