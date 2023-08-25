import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Meeting } from 'src/app/models/meetings';

@Component({
  selector: 'app-form-meeting',
  templateUrl: './form-meeting.component.html',
  styleUrls: ['./form-meeting.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgForm
  }]
})
export class FormMeetingComponent {
  public meeting: Meeting = {
    customerName: '',
    email: '',
    meetTitle: '',
    meetingAttendees: 0,
    date: '',
    startAt: '',
    endAt: '',
    meetID: 0,
  }
  public isEditMeeting: boolean = false;
}