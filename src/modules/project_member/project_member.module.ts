import { Module } from '@nestjs/common';
import { ProjectMemberService } from './project_member.service';
import { ProjectMemberController } from './project_member.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectMemberEntity } from './entities/project_member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectMemberEntity])],
  controllers: [ProjectMemberController],
  providers: [ProjectMemberService],
})
export class ProjectMemberModule {}
