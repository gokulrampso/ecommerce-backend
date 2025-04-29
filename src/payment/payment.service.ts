import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  async simulatePayment(body: any) {
    // Simulate payment logic
    return { status: 'success', message: 'Payment simulated (mock)' };
  }
}
