import { Employee } from './employee.entity';

describe('Employee entity', () => {
  let employee: Employee;

  beforeEach(() => {
    employee = new Employee({
      id: '1',
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: '1234567890',
      salary: 1000,
      department: 'IT',
      status: true,
      appointments: [],
    });
  });

  it('should create an employee', () => {
    expect(employee).toBeInstanceOf(Employee);
    expect(employee.getId()).toBe('1');
    expect(employee.getName()).toBe('John Doe');
    expect(employee.getEmail()).toBe('john@gmail.com');
    expect(employee.getPhone()).toBe('1234567890');
    expect(employee.getSalary()).toBe(1000);
    expect(employee.getDepartment()).toBe('IT');
  });

  it('should add appointments', () => {
    // act: 1st appointment
    const today = new Date();
    employee.addAppointment(today);
    // assert: 1st appointment
    expect(employee.getAppointments()).toHaveLength(1);
    expect(employee.getAppointments()[0].getDate()).toEqual(today);
    expect(employee.getAppointments()[0].getStatus()).toEqual('SCHEDULED');

    // act: 2nd appointment
    const today2 = new Date();
    employee.addAppointment(today2);
    // assert: 2nd appointment
    expect(employee.getAppointments()).toHaveLength(2);
    expect(employee.getAppointments()[0].getDate()).toEqual(today);
    expect(employee.getAppointments()[1].getDate()).toEqual(today2);
    expect(employee.getAppointments()[1].getStatus()).toEqual('SCHEDULED');
  });

  it('should cancel appointments', () => {
    // act: add appointment
    const today = new Date();
    employee.addAppointment(today);
    // assert: add appointment
    expect(employee.getAppointments()).toHaveLength(1);
    expect(employee.getAppointments()[0].getDate()).toEqual(today);
    expect(employee.getAppointments()[0].getStatus()).toEqual('SCHEDULED');

    // act: cancel appointment
    employee.getAppointments()[0].cancelAppointment('No reason provided');
    // assert: cancel appointment
    expect(employee.getAppointments()[0].getStatus()).toEqual('CANCELLED');
    expect(employee.getAppointments()[0].getStatus()).toEqual('CANCELLED');
    expect(employee.getAppointments()[0].getCancelReason()).toEqual(
      'No reason provided',
    );
  });
});
