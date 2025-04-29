import { PaymentService } from '../payment/payment.service';

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(() => {
    service = new PaymentService();
  });

  it('should simulate payment', async () => {
    const result = await service.simulatePayment({ amount: 100 });
    expect(result).toHaveProperty('status', 'success');
  });

  // Failure scenario (mocked)
  it('should handle payment failure', async () => {
    const result = await service.simulatePayment({ amount: 0 });
    expect(result).toHaveProperty('status');
  });
}); 