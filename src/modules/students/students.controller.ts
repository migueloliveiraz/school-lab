import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudentDto } from './dtos/create-student.dto';
import { StudentsService } from './students.service';

@Controller('/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async createStudent(@Body() data: CreateStudentDto) {
    return await this.studentsService.createStudent(data);
  }
}
