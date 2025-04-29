import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../product/product.controller';
import { ProductService } from '../product/product.service';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: {
            create: jest.fn().mockResolvedValue({ message: 'ok' }),
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({ name: 'Product' }),
            update: jest.fn().mockResolvedValue({ message: 'ok' }),
            remove: jest.fn().mockResolvedValue({ message: 'ok' }),
          },
        },
      ],
    }).compile();
    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
  });

  it('should create', async () => {
    expect(await controller.create({} as any)).toHaveProperty('message');
  });
  it('should findAll', async () => {
    expect(await controller.findAll({})).toEqual([]);
  });
  it('should findOne', async () => {
    expect(await controller.findOne('id')).toHaveProperty('name');
  });
  it('should update', async () => {
    expect(await controller.update('id', {} as any)).toHaveProperty('message');
  });
  it('should remove', async () => {
    expect(await controller.remove('id')).toHaveProperty('message');
  });
}); 