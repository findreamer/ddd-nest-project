import { Injectable } from '@nestjs/common';
import { CreateEmpPostDto } from './dto/create-emp_post.dto';
import { UpdateEmpPostDto } from './dto/update-emp_post.dto';

@Injectable()
export class EmpPostService {
  create(createEmpPostDto: CreateEmpPostDto) {
    return 'This action adds a new empPost';
  }

  findAll() {
    return `This action returns all empPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empPost`;
  }

  update(id: number, updateEmpPostDto: UpdateEmpPostDto) {
    return `This action updates a #${id} empPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} empPost`;
  }
}
