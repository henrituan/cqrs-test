import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { BookAppointmentCommand } from '../../application/commands/book-appointment.command';
import { GetEmployeeQuery } from '../../application/queries/get-employee.query';

interface BookAppointmentDto {
  appointmentDate: string;
}

@Controller('employees')
export class EmployeeController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.queryBus.execute(new GetEmployeeQuery(id));
  }

  @Post(':id/book-appointment')
  async bookApointment(
    @Param('id') id: string,
    @Body() bookApointmentDto: BookAppointmentDto,
  ) {
    await this.commandBus.execute(
      new BookAppointmentCommand(id, bookApointmentDto.appointmentDate),
    );
    return;
  }
}
