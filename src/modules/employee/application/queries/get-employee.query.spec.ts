import { EmployeeRepository } from '../../infrastructure/persistence/employee.repository';

import { GetEmployeeHandler, GetEmployeeQuery } from './get-employee.query';
import { EmployeeView } from './views/employee.view';

describe('GetEmployeeHandler', () => {
  const handler = new GetEmployeeHandler(new EmployeeRepository());

  const expectedView: EmployeeView = {
    id: '123',
    name: 'John Doe',
    email: 'john@gmail.com',
  };

  describe('execute', () => {
    it('should get employee by id and transform to view', async () => {
      const query = new GetEmployeeQuery('123');

      const result = await handler.execute(query);

      expect(result).toEqual(expectedView);
    });

    it('should throw error when repository fails', async () => {
      const query = new GetEmployeeQuery('wrong-id');
      const error = new Error('Employee not found with id wrong-id');

      await expect(handler.execute(query)).rejects.toThrow(error);
    });
  });
});
