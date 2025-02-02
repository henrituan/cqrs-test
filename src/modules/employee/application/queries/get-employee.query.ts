import { IQueryHandler, Query, QueryHandler } from '@nestjs/cqrs';

import { Inject } from '@nestjs/common';
import { Employee } from '../../domain/employee.entity';
import { IEmployeeRepository } from '../../domain/ports/repository.interface';
import { EmployeeView } from './views/employee.view';

export class GetEmployeeQuery extends Query<EmployeeView> {
  constructor(public readonly id: string) {
    super();
  }
}

@QueryHandler(GetEmployeeQuery)
export class GetEmployeeHandler
  implements IQueryHandler<GetEmployeeQuery, EmployeeView>
{
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: IEmployeeRepository,
  ) {}

  async execute(query: GetEmployeeQuery) {
    const entity = await this.employeeRepository.findById(query.id);
    return domainToView(entity);
  }
}

function domainToView(employee: Employee): EmployeeView {
  return {
    id: employee.getId(),
    name: employee.getName(),
    email: employee.getEmail(),
  };
}
