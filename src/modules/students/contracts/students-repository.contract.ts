import { Student } from '@prisma/client';
import { CreateStudentDto } from '../dtos/create-student.dto';
import { UpdateStudentDto } from '../dtos/update-student.dto';

export interface StudentsRepositoryContract {
  createStudent(data: CreateStudentDto): Promise<Student>;
  getAllStudents(): Promise<Student[]>;
  getStudentByEmail(email: string): Promise<Student>;
  updatePassword(data: UpdateStudentDto, email: string): Promise<Student>;
}
