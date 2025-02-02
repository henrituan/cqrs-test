import { Employee } from '../employee.entity';

export interface IEmployeeRepository {
  save(employee: Employee): Promise<void>;
  findById(id: string): Promise<Employee>;
}
