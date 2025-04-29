import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('simulate')
  async simulatePayment(@Body() body: any) {
    return this.paymentService.simulatePayment(body);
  }
} 