import { CommonEntity } from '@/common/entity/common.entity';
import { ProjectEntity } from '@/modules/project/entities/project.entity';
import { EmpEntity } from '@/modules/emp/entities/emp.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TenantEntity } from '@/modules/tenant/entities/tenant.entity';

@Entity({
  name: 'project_member',
  comment: '项目成员',
})
export class ProjectMemberEntity extends CommonEntity {
  @PrimaryGeneratedColumn({ comment: '项目成员ID' })
  id: number;

  @ManyToOne(() => ProjectEntity)
  @JoinColumn({
    name: 'project_id',
    referencedColumnName: 'id',
  })
  project: ProjectEntity;

  @ManyToOne(() => EmpEntity)
  @JoinColumn({
    name: 'emp_id',
    referencedColumnName: 'id',
  })
  emp: EmpEntity;

  @ManyToOne(() => TenantEntity)
  @JoinColumn({
    name: 'tenant_id',
    referencedColumnName: 'id',
  })
  tenant: TenantEntity;

  @Column({
    comment: '项目成员预计投资比例',
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: false,
    name: 'estimate_invest_ratio',
  })
  estimateInvestRatio: number;

  @Column({
    comment: '项目成员开始时间',
    type: 'date',
    nullable: false,
    name: 'start_at',
  })
  startAt: Date;

  @Column({
    comment: '项目成员结束时间',
    type: 'date',
    nullable: true,
    name: 'end_at',
  })
  endAt: Date;

  @Column({
    comment: '项目成员状态',
    type: 'char',
    length: 2,
    nullable: false,
    name: 'status',
  })
  status: string;
}
