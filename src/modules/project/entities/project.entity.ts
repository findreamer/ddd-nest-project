import { CommonEntity } from '@/common/entity/common.entity';
import { ContractEntity } from '@/modules/contract/entities/contract.entity';
import { TenantEntity } from '@/modules/tenant/entities/tenant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'project',
  comment: '项目',
})
export class ProjectEntity extends CommonEntity {
  @PrimaryGeneratedColumn({ comment: '项目ID' })
  id: number;

  @ManyToOne(() => TenantEntity)
  @JoinColumn({
    name: 'tenant_id',
    referencedColumnName: 'id',
  })
  tenant: TenantEntity;

  @ManyToOne(() => ContractEntity)
  @JoinColumn({
    name: 'contract_id',
    referencedColumnName: 'id',
  })
  contract: ContractEntity;

  @Column({
    comment: '项目编号',
    length: 50,
    nullable: false,
  })
  num: string;

  @Column({
    comment: '项目名称',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'char',
    comment: '项目状态',
    length: 2,
    nullable: false,
  })
  status: string;
}
