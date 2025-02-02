import { Appointment } from './appointment.value-object';

interface EmployeeProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  salary: number;
  department: string;
  status: boolean;
  appointments: Appointment[];
}

export class Employee {
  private props: EmployeeProps;

  constructor(props: EmployeeProps) {
    this.props = props;
  }

  public addAppointment(appointment: Appointment): void {
    this.props.appointments.push(appointment);
  }

  public cancelAppointment(appointmentId: string, cancelReason: string): void {
    const appointment = this.props.appointments.find(
      (appointment) => appointment.getId() === appointmentId,
    );

    if (!appointment) {
      throw new Error(`Appointment with id ${appointmentId} not found`);
    }

    appointment.cancelAppointment(cancelReason);
  }

  public getId(): string {
    return this.props.id;
  }

  public getName(): string {
    return this.props.name;
  }

  public getEmail(): string {
    return this.props.email;
  }

  public getPhone(): string {
    return this.props.phone;
  }

  public getSalary(): number {
    return this.props.salary;
  }

  public getDepartment(): string {
    return this.props.department;
  }

  public getStatus(): boolean {
    return this.props.status;
  }

  public getAppointments(): Appointment[] {
    return this.props.appointments;
  }
}
