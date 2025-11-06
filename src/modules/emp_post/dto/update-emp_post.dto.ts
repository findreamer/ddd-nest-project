import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpPostDto } from './create-emp_post.dto';

export class UpdateEmpPostDto extends PartialType(CreateEmpPostDto) {}
