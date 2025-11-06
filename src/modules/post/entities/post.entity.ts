import { CommonEntity } from '@/common/entity/common.entity';
import { EmpPostEntity } from '@/modules/emp_post/entities/emp_post.entity';
import { TenantEntity } from '@/modules/tenant/entities/tenant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'post', comment: '岗位' })
export class PostEntity extends CommonEntity {
  @PrimaryColumn({ comment: '岗位ID', type: 'char', length: 10 })
  code: string;

  @Column({ comment: '岗位名称', length: 50, nullable: false })
  name: string;

  // 租户
  @ManyToOne(() => TenantEntity)
  @JoinColumn({
    name: 'tenant_id',
    referencedColumnName: 'id',
  })
  tenant: TenantEntity;

  // 岗位员工关系
  @OneToMany(() => EmpPostEntity, (empPost) => empPost.post)
  empPosts: EmpPostEntity[];
}
