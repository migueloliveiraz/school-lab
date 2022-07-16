import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { HashProvider } from './providers/hash.provider';
import { StudentsRepository } from './repositories/students.repository';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentsController],
  providers: [StudentsRepository, HashProvider, StudentsService],
})
export class StudentsModule {}
