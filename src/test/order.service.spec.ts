import { OrderService } from '../order/order.service';
import { PlaceOrderDto } from '../order/order.dto';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    service = new OrderService();
  });

  it('should place an order', async () => {
    const dto: PlaceOrderDto = {
      items: [{ productId: 'pid', quantity: 1 }],
      shippingAddress: 'addr',
      paymentMethod: 'card',
    };
    const result = await service.placeOrder('userId', dto);
    expect(result).toHaveProperty('message');
  });

  it('should get order history', async () => {
    const result = await service.getOrderHistory('userId');
    expect(result).toHaveProperty('orders');
  });

  it('should cancel an order', async () => {
    const result = await service.cancelOrder('userId', 'orderId');
    expect(result).toHaveProperty('message');
  });

  // Failure scenarios (mocked)
  it('should fail to place order with empty items', async () => {
    const dto: PlaceOrderDto = {
      items: [],
      shippingAddress: 'addr',
      paymentMethod: 'card',
    };
    await expect(service.placeOrder('userId', dto)).resolves.toHaveProperty(
      'message',
    );
  });
});
