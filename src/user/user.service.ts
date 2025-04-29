import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  RegisterDto,
  LoginDto,
  UpdateProfileDto,
  ForgotPasswordDto,
  ResetPasswordDto,
} from './user.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name, 'mongodbconn')
    private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = new this.userModel({ ...dto, password: hashedPassword });
    await user.save();
    return { message: 'User registered' };
  }

  async login(dto: LoginDto) {
    const user = await this.userModel.findOne({ email: dto.email });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');
    const payload = { sub: user._id, email: user.email, roles: user.roles };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    // Implement profile update logic
    return { message: 'Profile updated (mock)' };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    // Implement forgot password logic
    return { message: 'Password reset link sent (mock)' };
  }

  async resetPassword(dto: ResetPasswordDto) {
    // Implement reset password logic
    return { message: 'Password reset (mock)' };
  }
}
