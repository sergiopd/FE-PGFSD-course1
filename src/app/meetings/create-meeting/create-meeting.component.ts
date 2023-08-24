import { Component, ViewChild } from '@angular/core';
import { FormMeetingComponent } from '../form-meeting/form-meeting.component';
import { NgForm } from '@angular/forms';
import { MeetingService } from 'src/app/services/meeting-service.service';
import { Meeting } from 'src/app/models/meetings';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent {
  @ViewChild(FormMeetingComponent) meetingForm!: FormMeetingComponent;

  constructor(private meetingService: MeetingService) { }

  public addMeeting(form: NgForm) {
    this.meetingService.createMeeting$(this.meetingForm.meeting).subscribe();
    this.meetingForm.meeting = new Meeting('', '', '', '', '', '', 0, 0);
    form.reset();
  }
}
