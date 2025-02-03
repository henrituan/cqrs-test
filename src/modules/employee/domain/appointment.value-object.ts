type AppointmentStatus = 'SCHEDULED' | 'CANCELLED' | 'COMPLETED';

export type AppointmentProps = {
  id: string;
  date: Date;
  status: AppointmentStatus;
  cancelReason?: string;
};

export class Appointment {
  private props: AppointmentProps;

  constructor(input: Omit<AppointmentProps, 'id'>) {
    this.props = {
      id: Math.floor(Math.random() * 1000).toString(),
      ...input,
    };
  }

  public cancelAppointment(cancelReason: string): void {
    this.props.status = 'CANCELLED';
    this.props.cancelReason = cancelReason;
  }

  public completeAppointment(): void {
    this.props.status = 'COMPLETED';
  }

  public rescheduleAppointment(date: Date): void {
    this.props.date = date;
  }

  public getId(): string {
    return this.props.id;
  }

  public getDate(): Date {
    return this.props.date;
  }

  public getCancelReason(): string {
    return this.props.cancelReason ?? '';
  }

  public getStatus(): AppointmentStatus {
    return this.props.status;
  }
}
