import { Injectable } from '@nestjs/common';
import { CreateOrgTypeDto } from './dto/create-org-type.dto';
import { UpdateOrgTypeDto } from './dto/update-org-type.dto';

@Injectable()
export class OrgTypeService {
  create(createOrgTypeDto: CreateOrgTypeDto) {
    return 'This action adds a new orgType';
  }

  findAll() {
    return `This action returns all orgType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orgType`;
  }

  update(id: number, updateOrgTypeDto: UpdateOrgTypeDto) {
    return `This action updates a #${id} orgType`;
  }

  remove(id: number) {
    return `This action removes a #${id} orgType`;
  }
}
