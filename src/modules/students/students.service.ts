import { Inject, Injectable } from '@nestjs/common';
import { StudentsRepository } from './repositories/students.repository';

import { CreateStudentDto } from './dtos/create-student.dto';
import { UpdateStudentDto } from './dtos/update-student.dto';
import { HashProvider } from './providers/hash.provider';

@Injectable()
export class StudentsService {
  constructor(
    private studentsRepository: StudentsRepository,
    private hashProvider: HashProvider,
  ) {}

  async createStudent(createStudentDto: CreateStudentDto) {
    const { password } = createStudentDto;

    const hashedPassword = await this.hashProvider.generateHash(password);

    const data = {
      ...createStudentDto,
      password: hashedPassword,
    };

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
