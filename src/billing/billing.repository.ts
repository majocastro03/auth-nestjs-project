import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Billing } from './billing.entity';
//Lógica para manejar la entidad Billing y realizar consultas a la base de datos
@Injectable()
export class BillingRepository {
  private repository: Repository<Billing>;

  constructor(private dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(Billing);
  }
  //Usando TypeORM
  async getBillingByUser(userId: number): Promise<Billing | null> {
    return await this.repository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }
  //Usando consultas SQL crudas
  async getBilling(userId: number): Promise<any> {
    const result = await this.dataSource.query("SELECT * FROM billing b WHERE b.user_id = $1", [userId]);

    return result[0] || null;
  }
}
