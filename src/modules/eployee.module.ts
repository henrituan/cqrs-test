import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { EmployeeController } from './employee/infrastructure/presentation/employee.controler';
import { GetEmployeeHandler } from './employee/application/queries/get-employee.query';
import { EmployeeRepository } from './employee/infrastructure/persistence/employee.repository';

@Module({
  imports: [CqrsModule],
  controllers: [EmployeeController],
  providers: [
    EmployeeRepository,
    GetEmployeeHandler,
    {
      provide: 'EMPLOYEE_REPOSITORY',
      useClass: EmployeeRepository,
    },
  ],
})
export class EmployeeModule {}
