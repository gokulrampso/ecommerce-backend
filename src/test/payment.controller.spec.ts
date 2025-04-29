import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from '../payment/payment.controller';
import { PaymentService } from '../payment/payment.service';

describe('PaymentController', () => {
  let controller: PaymentController;
  let service: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [
        {
          provide: PaymentService,
          useValue: {
            simulatePayment: jest.fn().mockResolvedValue({ status: 'success' }),
          },
        },
      ],
    }).compile();
    controller = module.get<PaymentController>(PaymentController);
    service = module.get<PaymentService>(PaymentService);
  });

  it('should simulate payment', async () => {
    expect(await controller.simulatePayment({ amount: 100 })).toHaveProperty('status', 'success');
  });
}); 