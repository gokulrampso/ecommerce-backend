import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { Product, ProductSchema } from './product/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Product.name, schema: ProductSchema }],
      'mongodbconn',
    ),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
