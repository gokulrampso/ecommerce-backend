import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from '../order/order.controller';
import { OrderService } from '../order/order.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

describe('OrderController', () => {
  let controller: OrderController;
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        {
          provide: OrderService,
          useValue: {
            placeOrder: jest.fn().mockResolvedValue({ message: 'ok' }),
            getOrderHistory: jest.fn().mockResolvedValue({ orders: [] }),
            cancelOrder: jest.fn().mockResolvedValue({ message: 'ok' }),
          },
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .compile();
    controller = module.get<OrderController>(OrderController);
    service = module.get<OrderService>(OrderService);
  });

  it('should place order', async () => {
    expect(
      await controller.placeOrder({ user: { userId: 'id' } } as any, {
        items: [{ productId: 'pid', quantity: 1 }],
        shippingAddress: 'addr',
        paymentMethod: 'card',
      }),
    ).toHaveProperty('message');
  });
  it('should get order history', async () => {
    expect(
      await controller.getOrderHistory({ user: { userId: 'id' } } as any),
    ).toHaveProperty('orders');
  });
  it('should cancel order', async () => {
    expect(
      await controller.cancelOrder(
        { user: { userId: 'id' } } as any,
        'orderId',
      ),
    ).toHaveProperty('message');
  });
});
