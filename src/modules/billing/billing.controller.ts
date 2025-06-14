import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingResponseDto } from 'src/billing/dto/billing-response.dto';
// Obtener datos recibidos y definir el tipo de respuesta
@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get(':userId')
  async getBillingByUser(
    @Param('userId', ParseIntPipe) userId: number
  ): Promise<BillingResponseDto> {
    return this.billingService.getByUserId(userId);
  }
}
