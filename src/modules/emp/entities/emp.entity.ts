import { CommonEntity } from '@/common/entity/common.entity';
import { EmpPostEntity } from '@/modules/emp_post/entities/emp_post.entity';
import { OrgEntity } from '@/modules/org/entities/org.entity';
import { TenantEntity } from '@/modules/tenant/entities/tenant.entity';

import {
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'emp', comment: '员工' })
export class EmpEntity extends CommonEntity {
  @PrimaryGeneratedColumn({ comment: '员工ID' })
  id: number;

  // 租户
  @ManyToOne(() => TenantEntity)
  @JoinColumn({
    name: 'tenant_id',
    referencedColumnName: 'id',
  })
  tenant: TenantEntity;

  // 组织
  @ManyToOne(() => OrgEntity)
  @JoinColumn({
    name: 'org_id',
    referencedColumnName: 'id',
  })
  org: OrgEntity;

  @Column({
    comment: '员工编号',
    length: 20,
    nullable: false,
  })
  num: string;

  @Column({
    comment: '身份证号',
    length: 20,
    nullable: false,
  })
  idNum: string;

  @Column({
    comment: '姓名',
    length: 20,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'char',
    comment: '性别',
    length: 2,
    nullable: false,
  })
  gender: string;

  @Column({
    type: 'date',
    comment: '出生日期',
    nullable: false,
  })
  dob: Date;

  @OneToMany(() => EmpPostEntity, (empPost) => empPost.emp)
  empPosts: EmpPostEntity[];
}
