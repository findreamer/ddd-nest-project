import { CommonEntity } from '@/common/entity/common.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tenant', comment: '租户' })
export class TenantEntity extends CommonEntity {
  @PrimaryGeneratedColumn({ comment: '主键' })
  id: number;

  @ApiProperty({ description: '租户名称' })
  @Column({ comment: '名称', length: 50, nullable: false })
  name: string;
}
