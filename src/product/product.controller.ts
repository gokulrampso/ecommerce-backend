import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  async findAll(@Query() query: any) {
    // query: { category, brand, minPrice, maxPrice, search }
    return this.productService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
