import { CommonEntity } from '@/common/entity/common.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { EmpEntity } from '@/modules/emp/entities/emp.entity';
import { PostEntity } from '@/modules/post/entities/post.entity';
import { TenantEntity } from '@/modules/tenant/entities/tenant.entity';

@Entity({ name: 'emp_post', comment: '员工岗位关联表' })
export class EmpPostEntity extends CommonEntity {
  @PrimaryColumn({ comment: '员工ID', type: 'int', name: 'emp_id' })
  empId: number;

  @PrimaryColumn({
    comment: '岗位编码',
    type: 'char',
    length: 10,
    name: 'post_code',
  })
  postCode: string;

  @ManyToOne(() => EmpEntity, (emp) => emp.empPosts)
  emp: EmpEntity;

  @ManyToOne(() => PostEntity, (post) => post.empPosts)
  post: PostEntity;

  @ManyToOne(() => TenantEntity)
  tenant: TenantEntity;
}
