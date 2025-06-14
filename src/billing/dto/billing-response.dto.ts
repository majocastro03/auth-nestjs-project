// DTO: Data Transfer Object: definir cómo se envían los datos entre el cliente y el servidor
export class BillingResponseDto {
  brand_id: number;
  store_id: number;
  resolucion: string;
  prefijo: string;
  rangoInicial: string;
  rangoFinal: string;
  medio_pago: string;
  vigenciaInicio: Date;
  vigenciaFin: Date;
}
