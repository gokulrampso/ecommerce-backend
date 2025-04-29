import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user.module';
import { ProductModule } from './product.module';
import { CartModule } from './cart.module';
import { OrderModule } from './order.module';
import { PaymentModule } from './payment.module';
import { SeedModule } from './seed.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || '', { connectionName: 'mongodbconn' }),
    UserModule,
    ProductModule,
    CartModule,
    OrderModule,
    PaymentModule,
    AuthModule,
    SeedModule,
  ],
})
export class AppModule {}
