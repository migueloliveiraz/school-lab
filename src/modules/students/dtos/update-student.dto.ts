import { Length } from 'class-validator';

export class UpdateStudentDto {
  @Length(4, 20)
  password: string;
}
