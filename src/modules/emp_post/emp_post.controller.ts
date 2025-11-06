import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpPostService } from './emp_post.service';
import { CreateEmpPostDto } from './dto/create-emp_post.dto';
import { UpdateEmpPostDto } from './dto/update-emp_post.dto';

@Controller('emp-post')
export class EmpPostController {
  constructor(private readonly empPostService: EmpPostService) {}

  @Post()
  create(@Body() createEmpPostDto: CreateEmpPostDto) {
    return this.empPostService.create(createEmpPostDto);
  }

  @Get()
  findAll() {
    return this.empPostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empPostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpPostDto: UpdateEmpPostDto) {
    return this.empPostService.update(+id, updateEmpPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empPostService.remove(+id);
  }
}
