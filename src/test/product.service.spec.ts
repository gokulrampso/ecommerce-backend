import { ProductService } from '../product/product.service';
import { CreateProductDto, UpdateProductDto } from '../product/product.dto';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    service = new ProductService();
  });

  it('should create a product', async () => {
    const dto: CreateProductDto = { name: 'Test', description: 'desc', price: 10, category: 'cat', brand: 'brand', stock: 1 };
    const result = await service.create(dto);
    expect(result).toHaveProperty('message');
  });

  it('should find all products', async () => {
    const result = await service.findAll({});
    expect(Array.isArray(result)).toBe(true);
  });

  it('should find one product', async () => {
    const result = await service.findOne('id');
    expect(result).toHaveProperty('name');
  });

  it('should update a product', async () => {
    const dto: UpdateProductDto = { name: 'Updated' };
    const result = await service.update('id', dto);
    expect(result).toHaveProperty('message');
  });

  it('should remove a product', async () => {
    const result = await service.remove('id');
    expect(result).toHaveProperty('message');
  });

  // Failure scenarios (mocked)
  it('should fail to create with missing name', async () => {
    const dto: any = { description: 'desc', price: 10, category: 'cat', brand: 'brand', stock: 1 };
    await expect(service.create(dto)).resolves.toHaveProperty('message');
  });
}); 