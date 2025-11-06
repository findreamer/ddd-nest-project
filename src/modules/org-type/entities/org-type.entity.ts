import { CommonEntity } from '@/common/entity/common.entity';
import { TenantEntity } from '@/modules/tenant/entities/tenant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'org_type', comment: '组织类型' })
export class OrgTypeEntity extends CommonEntity {
  @PrimaryGeneratedColumn({ comment: '组织类型ID' })
  id: number;

  // 组织类型名称
  @Column({ comment: '组织类型名称', length: 50, nullable: false })
  name: string;

  // 租户
  @ManyToOne(() => TenantEntity)
  @JoinColumn({
    name: 'tenant_id',
    referencedColumnName: 'id',
  })
  tenant: TenantEntity;
}
