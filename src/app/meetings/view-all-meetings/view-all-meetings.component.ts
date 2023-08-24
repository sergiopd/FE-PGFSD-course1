import { Component, ViewChild } from '@angular/core';
import { FormMeetingComponent } from '../form-meeting/form-meeting.component';
import { MeetingService } from 'src/app/services/meeting-service.service';
import { Meeting } from 'src/app/models/meetings';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-all-meetings',
  templateUrl: './view-all-meetings.component.html',
  styleUrls: ['./view-all-meetings.component.css']
})
export class ViewAllMeetingsComponent {
  @ViewChild(FormMeetingComponent) meetingForm!: FormMeetingComponent;

  public meeting: Meeting = new Meeting('', '', '', '', '', '', 0, 0);
  public meetings: Meeting[] = [];

  constructor(private meetingService: MeetingService) { }

  public getMeetings() {
    this.meetingService.getAllMeetings$().subscribe(meetingReply => {
      this.meetings = meetingReply;
    })
  }

  public getMeeting(email: string) {
    this.meetingService.getMeeting$(email)
      .subscribe((customerReply) => {
        this.meetingForm.meeting = customerReply[0];
      });
    this.meetingForm.isEditMeeting = true;
  }

  public updateMeeting() {
    this.meetingService.updateMeeting$(this.meetingForm.meeting).subscribe();
  }

  public deleteMeeting(email: string, form: NgForm) {
    this.meetingService.deleteMeeting$(email).subscribe();
    this.meetingForm.meeting = new Meeting('', '', '', '', '', '', 0, 0);
    form.reset();
  }
}
