import { Injectable } from '@nestjs/common';

import { Employee } from '../../domain/employee.entity';
import { IEmployeeRepository } from '../../domain/ports/repository.interface';

@Injectable()
export class EmployeeRepository implements IEmployeeRepository {
  findById(id: string) {
    if (id === 'wrong-id') {
      return Promise.reject(new Error(`Employee not found with id ${id}`));
    }

    const mockEmployee = new Employee({
      id,
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: '1234567890',
      salary: 1000,
      department: 'IT',
      status: true,
      appointments: [],
    });

    console.log('Returning mock Employee');
    return Promise.resolve(mockEmployee);
  }

  save(employee: Employee) {
    console.log('Saving Employee (not implemented)');

    const appointments = employee.getAppointments();
    if (appointments.length) {
      console.log(
        'Saving appointments (not implemented): ',
        JSON.stringify(appointments),
      );
    }

    return Promise.resolve();
  }
}
