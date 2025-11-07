import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export abstract class CommonEntity {
  @Column({
    type: 'enum',
    enum: [0, 1],
    default: 0,
    name: 'is_deleted',
    comment: '是否删除',
  })
  @Exclude()
  isDeleted: number;

  @Column({
    type: 'int',
    name: 'create_by',
    comment: '创建人',
    nullable: true,
  })
  public createBy: number;

  @Column({
    type: 'int',
    name: 'update_by',
    comment: '更新人',
    nullable: true,
  })
  public updateBy: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'create_at',
    comment: '创建时间',
  })
  public createAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'update_at',
    comment: '更新时间',
  })
  public updateAt: Date;
}
