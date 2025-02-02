import { Test, TestingModule } from '@nestjs/testing';

import { Employee } from '../../domain/employee.entity';
import { EmployeeRepository } from './employee.repository';

describe('EmployeeRepository', () => {
  let repository: EmployeeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeRepository],
    }).compile();

    repository = module.get<EmployeeRepository>(EmployeeRepository);
  });

  describe('findById', () => {
    it('should return an employee with the given id', async () => {
      // Arrange
      const testId = '123';
      const expectedEmployee = new Employee({
        id: testId,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '1234567890',
        salary: 1000,
        department: 'IT',
        status: true,
        appointments: [],
      });

      // Act
      const result = await repository.findById(testId);

      // Assert
      expect(result).toBeInstanceOf(Employee);
      expect(result).toEqual(expectedEmployee);
    });
  });
});
