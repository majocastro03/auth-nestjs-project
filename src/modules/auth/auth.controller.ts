import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
      constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
