export interface Meeting {
  customerName: string;
  date: Date | string;
  email: string;
  endAt: string;
  meetID?: number;
  meetingAttendees: number;
  meetTitle: string;
  startAt: string;
}
