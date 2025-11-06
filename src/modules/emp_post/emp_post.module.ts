import { Module } from '@nestjs/common';
import { EmpPostService } from './emp_post.service';
import { EmpPostController } from './emp_post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpPostEntity } from './entities/emp_post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmpPostEntity])],
  controllers: [EmpPostController],
  providers: [EmpPostService],
})
export class EmpPostModule {}
