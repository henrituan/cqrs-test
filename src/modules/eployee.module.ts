import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { GetEmployeeHandler } from './employee/application/queries/get-employee.query';
import { EmployeeRepository } from './employee/infrastructure/persistence/employee.repository';
import { EmployeeController } from './employee/infrastructure/presentation/employee.controller';

@Module({
  imports: [CqrsModule],
  controllers: [EmployeeController],
  providers: [
    GetEmployeeHandler,
    {
      provide: 'EMPLOYEE_REPOSITORY',
      useClass: EmployeeRepository,
    },
  ],
})
export class EmployeeModule {}
