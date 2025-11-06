import { CommonEntity } from '@/common/entity/common.entity';
import { TenantEntity } from '@/modules/tenant/entities/tenant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'org', comment: '组织' })
export class OrgEntity extends CommonEntity {
  @PrimaryGeneratedColumn({ comment: '组织ID' })
  id: number;

  @Column({ comment: '组织名称', length: 50, nullable: false })
  name: string;

  // 租户
  @ManyToOne(() => TenantEntity)
  @JoinColumn({
    name: 'tenant_id',
    referencedColumnName: 'id',
  })
  tenant: TenantEntity;
}
