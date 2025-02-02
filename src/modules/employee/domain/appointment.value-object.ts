type AppointmentStatus = 'SCHEDULED' | 'CANCELLED' | 'COMPLETED';

export class Appointment {
  private id: string;

  constructor(
    private date: Date,
    private cancelReason: string,
    private status: AppointmentStatus,
  ) {
    this.id = Math.floor(Math.random() * 1000).toString();
  }

  public cancelAppointment(cancelReason: string): void {
    this.status = 'CANCELLED';
    this.cancelReason = cancelReason;
  }

  public completeAppointment(): void {
    this.status = 'COMPLETED';
  }

  public rescheduleAppointment(date: Date): void {
    this.date = date;
  }

  public getId(): string {
    return this.id;
  }

  public getDate(): Date {
    return this.date;
  }

  public getCancelReason(): string {
    return this.cancelReason;
  }

  public getStatus(): AppointmentStatus {
    return this.status;
  }
}
