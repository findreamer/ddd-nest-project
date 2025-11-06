import { Module } from '@nestjs/common';
import { EffortRecordService } from './effort_record.service';
import { EffortRecordController } from './effort_record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EffortRecordEntity } from './entities/effort_record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EffortRecordEntity])],
  controllers: [EffortRecordController],
  providers: [EffortRecordService],
})
export class EffortRecordModule {}
