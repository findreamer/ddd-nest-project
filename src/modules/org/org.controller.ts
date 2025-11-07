import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrgService } from './org.service';
import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('org')
export class OrgController {
  constructor(private readonly orgService: OrgService) {}

  @Post()
  @ApiOperation({
    summary: '创建组织',
    description: '根据提交的数据创建一个新的组织',
  })
  @ApiBody({
    type: CreateOrgDto,
    examples: {
      example1: {
        summary: '示例1',
        value: {
          tenant: 1,
          superior: 0,
          orgType: 'department',
          leader: 1,
          name: '研发中心',
        },
      },
    },
  })
  create(@Body() createOrgDto: CreateOrgDto) {
    return this.orgService.create(createOrgDto);
  }

  @Get()
  findAll() {
    return this.orgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orgService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrgDto: UpdateOrgDto) {
    return this.orgService.update(+id, updateOrgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orgService.remove(+id);
  }
}
