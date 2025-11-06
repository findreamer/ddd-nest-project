import { CommonEntity } from '@/common/entity/common.entity';
import { ClientEntity } from '@/modules/client/entities/client.entity';
import { TenantEntity } from '@/modules/tenant/entities/tenant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'contract',
  comment: '合同',
})
export class ContractEntity extends CommonEntity {
  @PrimaryGeneratedColumn({ comment: '合同ID' })
  id: number;

  @ManyToOne(() => TenantEntity)
  @JoinColumn({
    name: 'tenant_id',
    referencedColumnName: 'id',
  })
  tenant: TenantEntity;

  @Column({
    comment: '合同编号',
    length: 20,
    nullable: false,
  })
  num: string;

  @Column({
    comment: '合同名称',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'char',
    comment: '合同状态',
    length: 2,
    nullable: false,
  })
  status: string;

  @ManyToOne(() => ClientEntity)
  @JoinColumn({
    name: 'client_id',
    referencedColumnName: 'id',
  })
  client: ClientEntity;
}
