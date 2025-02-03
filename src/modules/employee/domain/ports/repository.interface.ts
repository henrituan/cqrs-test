import { Employee } from '../employee.entity';

export interface IEmployeeRepository {
  findById(id: string): Promise<Employee>;
  save(employee: Employee): Promise<void>;
}
