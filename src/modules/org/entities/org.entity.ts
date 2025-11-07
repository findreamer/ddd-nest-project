import { CommonEntity } from '@/common/entity/common.entity';
import { EmpEntity } from '@/modules/emp/entities/emp.entity';
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

  // 上级组织
  @ManyToOne(() => OrgEntity, (org) => org.id)
  @JoinColumn({
    name: 'superior_id',
    referencedColumnName: 'id',
  })
  superior: OrgEntity;

  // 负责人
  @ManyToOne(() => EmpEntity)
  @JoinColumn({
    name: 'leader_id',
    referencedColumnName: 'id',
  })
  leader: EmpEntity;
}
