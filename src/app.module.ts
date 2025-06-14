import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { BillingModule } from './modules/billing/billing.module';
import { Billing } from './billing/billing.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'root',
      database: 'authdb',
      entities: [Billing, User],
      synchronize: false,
    }),
      BillingModule,
    ],
})
export class AppModule {}
