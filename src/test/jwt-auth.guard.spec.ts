import { JwtAuthGuard } from '../auth/jwt-auth.guard';

describe('JwtAuthGuard', () => {
  it('should be defined and be instance of JwtAuthGuard', () => {
    const guard = new JwtAuthGuard();
    expect(guard).toBeDefined();
    expect(guard).toBeInstanceOf(JwtAuthGuard);
  });
}); 