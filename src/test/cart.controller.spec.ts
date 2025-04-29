import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from '../cart/cart.controller';
import { CartService } from '../cart/cart.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

describe('CartController', () => {
  let controller: CartController;
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [
        {
          provide: CartService,
          useValue: {
            addItem: jest.fn().mockResolvedValue({ message: 'ok' }),
            updateItem: jest.fn().mockResolvedValue({ message: 'ok' }),
            removeItem: jest.fn().mockResolvedValue({ message: 'ok' }),
            getCart: jest.fn().mockResolvedValue({ items: [] }),
          },
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .compile();
    controller = module.get<CartController>(CartController);
    service = module.get<CartService>(CartService);
  });

  it('should add item', async () => {
    expect(
      await controller.addItem({ user: { userId: 'id' } } as any, {
        productId: 'pid',
        quantity: 1,
      }),
    ).toHaveProperty('message');
  });
  it('should update item', async () => {
    expect(
      await controller.updateItem({ user: { userId: 'id' } } as any, 'itemId', {
        quantity: 2,
      }),
    ).toHaveProperty('message');
  });
  it('should remove item', async () => {
    expect(
      await controller.removeItem({ user: { userId: 'id' } } as any, 'itemId'),
    ).toHaveProperty('message');
  });
  it('should get cart', async () => {
    expect(
      await controller.getCart({ user: { userId: 'id' } } as any),
    ).toHaveProperty('items');
  });
});
