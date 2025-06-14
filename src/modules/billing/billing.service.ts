import { Injectable, NotFoundException } from '@nestjs/common';
import { BillingRepository } from 'src/billing/billing.repository';
import { BillingResponseDto } from 'src/billing/dto/billing-response.dto';

// Usar repositorio de facturación para manejar los errores
@Injectable()
export class BillingService {
  constructor(private readonly billingRepository: BillingRepository) {}

  async getByUserId(userId: number): Promise<BillingResponseDto> {
    try {
      const record = await this.billingRepository.getBillingByUser(userId);

      if (!record) {
        throw new NotFoundException(`No se encontró información de facturación para el usuario ${userId}`);
      }

      const {
        brand_id, store_id, resolucion, prefijo,
        rangoInicial, rangoFinal, medio_pago,
        vigenciaInicio, vigenciaFin
      } = record;

      return {
        brand_id, store_id, resolucion, prefijo,
        rangoInicial, rangoFinal, medio_pago,
        vigenciaInicio, vigenciaFin
      };
    } catch (err) {
      throw err;
    }
  }
}
