import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @Length(4, 20)
  password: string;
}
