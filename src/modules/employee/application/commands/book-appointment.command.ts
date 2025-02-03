import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { IEmployeeRepository } from '../../domain/ports/repository.interface';

export class BookAppointmentCommand {
  constructor(
    public readonly employeeId: string,
    public readonly appointmentDate: string,
  ) {}
}

@CommandHandler(BookAppointmentCommand)
export class BookAppointmentHandler
  implements ICommandHandler<BookAppointmentCommand>
{
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: IEmployeeRepository,
  ) {}

  async execute({ employeeId, appointmentDate }: BookAppointmentCommand) {
    const entity = await this.employeeRepository.findById(employeeId);
    entity.addAppointment(new Date(appointmentDate));
    return this.employeeRepository.save(entity);
  }
}
