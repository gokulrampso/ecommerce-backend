import { JwtStrategy } from '../auth/jwt.strategy';

describe('JwtStrategy', () => {
  let strategy: JwtStrategy;

  beforeEach(() => {
    process.env.JWT_SECRET = 'testsecret';
    strategy = new JwtStrategy();
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  it('should validate payload', async () => {
    const payload = {
      sub: 'userId',
      email: 'test@example.com',
      roles: ['user'],
    };
    const result = await strategy.validate(payload);
    expect(result).toEqual({
      userId: 'userId',
      email: 'test@example.com',
      roles: ['user'],
    });
  });
});
