import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { PlaceOrderDto } from './order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async placeOrder(@Req() req: Request, @Body() dto: PlaceOrderDto) {
    const user = req.user as any;
    return this.orderService.placeOrder(user.userId, dto);
  }

  @Get('history')
  async getOrderHistory(@Req() req: Request) {
    const user = req.user as any;
    return this.orderService.getOrderHistory(user.userId);
  }

  @Delete(':orderId')
  async cancelOrder(@Req() req: Request, @Param('orderId') orderId: string) {
    const user = req.user as any;
    return this.orderService.cancelOrder(user.userId, orderId);
  }
}
