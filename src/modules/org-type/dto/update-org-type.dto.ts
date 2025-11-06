import { PartialType } from '@nestjs/mapped-types';
import { CreateOrgTypeDto } from './create-org-type.dto';

export class UpdateOrgTypeDto extends PartialType(CreateOrgTypeDto) {}
