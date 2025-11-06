import { CommonEntity } from '@/common/entity/common.entity';
import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
  comment: '用户',
})
export class UserEntity extends CommonEntity {
  @PrimaryGeneratedColumn({
    comment: '用户ID',
  })
  id: number;

  @Column({
    comment: '用户名',
    length: 255,
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    comment: '密码',
    length: 255,
    nullable: false,
  })
  @Exclude()
  password: string;

  @Column({
    comment: '邮箱',
    length: 255,
    nullable: true,
  })
  email: string;
}
