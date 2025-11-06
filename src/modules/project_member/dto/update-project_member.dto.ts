import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectMemberDto } from './create-project_member.dto';

export class UpdateProjectMemberDto extends PartialType(CreateProjectMemberDto) {}
