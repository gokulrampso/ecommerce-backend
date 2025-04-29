import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user/user.schema';
import { Product, ProductDocument } from './product/product.schema';
import { sampleUsers, sampleProducts } from './seed/sample-data';

@Injectable()
export class SeedService implements OnModuleInit {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    @InjectModel(User.name, 'mongodbconn') private userModel: Model<UserDocument>,
    @InjectModel(Product.name, 'mongodbconn') private productModel: Model<ProductDocument>,
  ) {}

  async onModuleInit() {
    // Seed users
    const userCount = await this.userModel.countDocuments();
    if (userCount === 0) {
      await this.userModel.insertMany(sampleUsers);
      this.logger.log('Seeded sample users');
    }
    // Seed products
    const productCount = await this.productModel.countDocuments();
    if (productCount === 0) {
      await this.productModel.insertMany(sampleProducts);
      this.logger.log('Seeded sample products');
    }
  }
} 