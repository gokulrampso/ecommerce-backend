import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Body,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddCartItemDto, UpdateCartItemDto } from './cart.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  async addItem(@Req() req: Request, @Body() dto: AddCartItemDto) {
    const user = req.user as any;
    return this.cartService.addItem(user.userId, dto);
  }

  @Put('update/:itemId')
  async updateItem(
    @Req() req: Request,
    @Param('itemId') itemId: string,
    @Body() dto: UpdateCartItemDto,
  ) {
    const user = req.user as any;
    return this.cartService.updateItem(user.userId, itemId, dto);
  }

  @Delete('remove/:itemId')
  async removeItem(@Req() req: Request, @Param('itemId') itemId: string) {
    const user = req.user as any;
    return this.cartService.removeItem(user.userId, itemId);
  }

  @Get()
  async getCart(@Req() req: Request) {
    const user = req.user as any;
    return this.cartService.getCart(user.userId);
  }
}
