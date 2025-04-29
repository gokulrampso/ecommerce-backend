import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User, UserSchema } from './user/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], 'mongodbconn'),JwtModule.register({
    secret: process.env.JWT_SECRET || 'your_jwt_secret',
    signOptions: { expiresIn: '1d' },
  }),],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {} 