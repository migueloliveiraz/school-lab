import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma/prisma.service';

import { StudentsRepositoryContract } from '../contracts/students-repository.contract';
import { CreateStudentDto } from '../dtos/create-student.dto';
import { UpdateStudentDto } from '../dtos/update-student.dto';

@Injectable()
export class StudentsRepository implements StudentsRepositoryContract {
  constructor(private prisma: PrismaService) {}
  createStudent(data: CreateStudentDto) {
    return this.prisma.student.create({
      data,
    });
  }

  getAllStudents() {
    return this.prisma.student.findMany();
  }

  getStudentByEmail(email: string) {
    return this.prisma.student.findUnique({
      where: {
        email,
      },
    });
  }

  updatePassword(data: UpdateStudentDto, email: string) {
    return this.prisma.student.update({
      where: { email },
      data,
    });
  }
}
