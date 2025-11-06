import { CommonEntity } from '@/common/entity/common.entity';
import { EmpEntity } from '@/modules/emp/entities/emp.entity';
import { ProjectEntity } from '@/modules/project/entities/project.entity';
import { TenantEntity } from '@/modules/tenant/entities/tenant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'effort_record',
  comment: '员工工时记录',
})
export class EffortRecordEntity extends CommonEntity {
  @PrimaryGeneratedColumn({
    comment: '工时记录ID',
  })
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
    comment: '工时记录日期',
    type: 'date',
    nullable: false,
  })
  workDate: Date;

  @Column({
    comment: '工时记录工时',
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: false,
  })
  effort: number;

  @Column({
    comment: '工时记录备注',
    length: 255,
    nullable: true,
  })
  notes: string;
}
