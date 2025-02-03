import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

import { EmployeeController } from './employee.controller';

describe('EmployeeController', () => {
  let controller: EmployeeController;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: CommandBus,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EmployeeController>(EmployeeController);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  describe('findOne', () => {
    it('should return an employee when a valid ID is provided', async () => {
      const employeeId = '123';
      const expectedEmployee = { id: employeeId, name: 'John Doe' };

      jest.spyOn(queryBus, 'execute').mockResolvedValue(expectedEmployee);

      const result = await controller.findOne(employeeId);

      expect(result).toEqual(expectedEmployee);
    });

    it('should throw an error if query fails', async () => {
      const employeeId = '123';
      const errorMessage = 'Employee not found';

      jest
        .spyOn(queryBus, 'execute')
        .mockRejectedValue(new Error(errorMessage));

      await expect(controller.findOne(employeeId)).rejects.toThrow(
        errorMessage,
      );
    });
  });
});
