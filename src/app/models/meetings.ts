export class Meeting {
  customerName: string;
  date: Date | string;
  email: string;
  endAt: string;
  meetTitle: string;
  startAt: string;
  meetingAttendees: number;
  meetID: number;
  constructor(
    customerName: string, date: string, email: string, endAt: string, meetTitle: string, startAt: string, meetingAttendees: number, meetID: number = 0
  ) {
    this.customerName = customerName;
    this.date = date;
    this.email = email;
    this.endAt = endAt;
    this.meetingAttendees = meetingAttendees;
    this.meetTitle = meetTitle;
    this.startAt = startAt;
    this.meetID = meetID;
  }
}
