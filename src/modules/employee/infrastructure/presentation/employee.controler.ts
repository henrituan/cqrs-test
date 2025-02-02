import { Controller, Get, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { GetEmployeeQuery } from '../../application/queries/get-employee.query';

@Controller('employees')
export class EmployeeController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  // @Post()
  // async bookApointment(dto: CreateEmployeeDto) {
  //   return this.commandBus.execute(new CreateEmployeeCommand(dto));
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.queryBus.execute(new GetEmployeeQuery(id));
  }
}
