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

@Entity({
  name: 'client',
  comment: '客户',
})
export class ClientEntity extends CommonEntity {
  @PrimaryGeneratedColumn({ comment: '客户ID' })
  id: number;

  @ManyToOne(() => TenantEntity)
  @JoinColumn({
    name: 'tenant_id',
    referencedColumnName: 'id',
  })
  tenant: TenantEntity;

  @Column({
    comment: '客户名称',
    length: 50,
    nullable: false,
  })
  name: string;

  // 客户管理员
  @ManyToOne(() => EmpEntity)
  @JoinColumn({
    name: 'mng_id',
    referencedColumnName: 'id',
  })
  mng: EmpEntity;
}
