import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../../users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../../users/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secret', 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AuthModule {}
