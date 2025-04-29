import { SeedService } from '../seed.service';

describe('SeedService', () => {
  let service: SeedService;
  let userModel: any;
  let productModel: any;

  beforeEach(() => {
    userModel = {
      countDocuments: jest.fn().mockResolvedValue(0),
      insertMany: jest.fn(),
    };
    productModel = {
      countDocuments: jest.fn().mockResolvedValue(0),
      insertMany: jest.fn(),
    };
    service = new SeedService(userModel, productModel);
  });

  it('should seed users and products if collections are empty', async () => {
    await service.onModuleInit();
    expect(userModel.insertMany).toHaveBeenCalled();
    expect(productModel.insertMany).toHaveBeenCalled();
  });
});
