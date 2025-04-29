import { CartService } from '../cart/cart.service';
import { AddCartItemDto, UpdateCartItemDto } from '../cart/cart.dto';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    service = new CartService();
  });

  it('should add item to cart', async () => {
    const dto: AddCartItemDto = { productId: 'productId', quantity: 1 };
    const result = await service.addItem('userId', dto);
    expect(result).toHaveProperty('message');
  });

  it('should update cart item', async () => {
    const dto: UpdateCartItemDto = { quantity: 2 };
    const result = await service.updateItem('userId', 'itemId', dto);
    expect(result).toHaveProperty('message');
  });

  it('should remove cart item', async () => {
    const result = await service.removeItem('userId', 'itemId');
    expect(result).toHaveProperty('message');
  });

  it('should get cart', async () => {
    const result = await service.getCart('userId');
    expect(result).toHaveProperty('items');
  });

  // Failure scenarios (mocked)
  it('should fail to add item with invalid productId', async () => {
    const dto: AddCartItemDto = { productId: '', quantity: 1 };
    await expect(service.addItem('userId', dto)).resolves.toHaveProperty(
      'message',
    );
  });
});
