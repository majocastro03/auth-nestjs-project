import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Billing } from 'src/billing/billing.entity';
import { BillingRepository } from 'src/billing/billing.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Billing])],
  controllers: [BillingController],
  providers: [BillingService, BillingRepository],
})
export class BillingModule {}
