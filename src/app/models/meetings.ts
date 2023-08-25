export class Meeting {
  customerName: string;
  meetDate: string;
  email: string;
  endAt: string;
  meetTitle: string;
  startAt: string;
  meetingAttendees: number;
  meetID: number;
  constructor(
    customerName: string, meetDate: string, email: string, endAt: string, meetTitle: string, startAt: string, meetingAttendees: number, meetID: number = 0
  ) {
    this.customerName = customerName;
    this.meetDate = meetDate;
    this.email = email;
    this.endAt = endAt;
    this.meetingAttendees = meetingAttendees;
    this.meetTitle = meetTitle;
    this.startAt = startAt;
    this.meetID = meetID;
  }
}
