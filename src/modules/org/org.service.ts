import { Injectable } from '@nestjs/common';
import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrgEntity } from './entities/org.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrgService {
  constructor(
    @InjectRepository(OrgEntity)
    private readonly orgRepository: Repository<OrgEntity>,
  ) {}

  async create(createOrgDto: CreateOrgDto) {
    const { tenant, superior, orgType, leader, name } = createOrgDto;

    // // 检查租户是否存在
    // const tenantOrg = await this.orgRepository.findOne({
    //   where: { id: tenant, isDeleted: 0 },
    // });
    // if (!tenantOrg) {
    //   throw new Error('租户不存在');
    // }

    // // 检查上级组织是否存在
    // if (superior) {
    //   const superiorOrg = await this.orgRepository.findOne({
    //     where: { id: superior, isDeleted: 0 },
    //   });
    //   if (!superiorOrg) {
    //     throw new Error('上级组织不存在');
    //   }
    // }
    // // 检查负责人是否存在
    // const leaderOrg = await this.orgRepository.findOne({
    //   where: { id: leader, isDeleted: 0 },
    // });
    // if (!leaderOrg) {
    //   throw new Error('负责人不存在');
    // }

    // 如果 DTO 里传的是纯外键 id，直接赋值即可，无需先查询实体
    const org = {
      tenantId: tenant, // 租户外键
      superiorId: superior, // 上级组织外键
      orgType: orgType,
      leaderId: leader, // 负责人外键
      name: name,
    };
    return this.orgRepository.save(org);
  }

  findAll() {
    return `This action returns all org`;
  }

  findOne(id: number) {
    return `This action returns a #${id} org`;
  }

  update(id: number, updateOrgDto: UpdateOrgDto) {
    return `This action updates a #${id} org`;
  }

  remove(id: number) {
    return `This action removes a #${id} org`;
  }
}
