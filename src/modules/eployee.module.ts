import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BookAppointmentHandler } from './employee/application/commands/book-appointment.command';
import { GetEmployeeHandler } from './employee/application/queries/get-employee.query';

import { EmployeeRepository } from './employee/infrastructure/persistence/employee.repository';
import { EmployeeController } from './employee/infrastructure/presentation/employee.controller';

@Module({
  imports: [CqrsModule],
  controllers: [EmployeeController],
  providers: [
    GetEmployeeHandler,
    BookAppointmentHandler,
    {
      provide: 'EMPLOYEE_REPOSITORY',
      useClass: EmployeeRepository,
    },
  ],
})
export class EmployeeModule {}
