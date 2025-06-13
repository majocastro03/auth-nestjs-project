import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const result = await this.authService.login(email, password);

    if (!result) throw new UnauthorizedException('Credenciales inválidas');

    return result;
  }
}
