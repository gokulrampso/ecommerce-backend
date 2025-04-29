import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { Cart, CartSchema } from './cart/cart.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }])],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {} 