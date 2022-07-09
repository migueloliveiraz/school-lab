import { Inject, Injectable } from '@nestjs/common';
import { StudentsRepository } from './repositories/students.repository';

import { StudentsRepositoryContract } from './contracts/students-repository.contract';
import { CreateStudentDto } from './dtos/create-student.dto';
import { UpdateStudentDto } from './dtos/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @Inject(StudentsRepository)
    private studentsRepository: StudentsRepositoryContract,
  ) {}

  createStudent(data: CreateStudentDto) {
    return this.studentsRepository.createStudent(data);
  }

  listAllStudents() {
    return this.studentsRepository.getAllStudents();
  }

  getStudenyByEmail(email: string) {
    return this.studentsRepository.getStudentByEmail(email);
  }

  updatePassword(data: UpdateStudentDto, email: string) {
    return this.studentsRepository.updatePassword(data, email);
  }
}
