import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrgTypeService } from './org-type.service';
import { CreateOrgTypeDto } from './dto/create-org-type.dto';
import { UpdateOrgTypeDto } from './dto/update-org-type.dto';

@Controller('org-type')
export class OrgTypeController {
  constructor(private readonly orgTypeService: OrgTypeService) {}

  @Post()
  create(@Body() createOrgTypeDto: CreateOrgTypeDto) {
    return this.orgTypeService.create(createOrgTypeDto);
  }

  @Get()
  findAll() {
    return this.orgTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orgTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrgTypeDto: UpdateOrgTypeDto) {
    return this.orgTypeService.update(+id, updateOrgTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orgTypeService.remove(+id);
  }
}
