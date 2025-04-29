import {
  IsArray,
  ValidateNested,
  IsString,
  IsMongoId,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsMongoId()
  productId: string;

  @IsInt()
  @Min(1)
  quantity: number;
}

export class PlaceOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsString()
  shippingAddress: string;

  @IsString()
  paymentMethod: string;
}
