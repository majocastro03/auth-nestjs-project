import { User } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
// Interface de Billing
@Entity('billing')
export class Billing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand_id: number;

  @Column()
  store_id: number;

  @Column()
  resolucion: string;

  @Column()
  prefijo: string;

  @Column({ name: 'rango_inicial' })
  rangoInicial: string;

  @Column({ name: 'rango_final' })
  rangoFinal: string;

  @Column()
  medio_pago: string;

  @Column({ name: 'vigencia_inicio', type: 'timestamp' })
  vigenciaInicio: Date;

  @Column({ name: 'vigencia_fin', type: 'timestamp' })
  vigenciaFin: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
