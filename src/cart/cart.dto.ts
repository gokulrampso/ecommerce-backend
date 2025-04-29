import { IsString, IsMongoId, IsInt, Min } from 'class-validator';

export class AddCartItemDto {
  @IsMongoId()
  productId: string;

  @IsInt()
  @Min(1)
  quantity: number;
}

export class UpdateCartItemDto {
  @IsInt()
  @Min(1)
  quantity: number;
} 