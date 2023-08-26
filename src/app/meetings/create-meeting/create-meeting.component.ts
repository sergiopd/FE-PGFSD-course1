import { Component, ViewChild, OnDestroy } from '@angular/core';
import { FormMeetingComponent } from '../form-meeting/form-meeting.component';
import { NgForm } from '@angular/forms';
import { MeetingService } from 'src/app/services/meeting-service.service';
import { Meeting } from 'src/app/models/meetings';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnDestroy {
  @ViewChild(FormMeetingComponent) meetingForm!: FormMeetingComponent;

  public message = '';
  private subscription = new Subscription();

  constructor(private meetingService: MeetingService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public addMeeting(form: NgForm) {
    this.meetingForm.meeting.meetDate = this.meetingForm.date;
    this.subscription = this.meetingService.createMeeting$(this.meetingForm.meeting).subscribe({
      error: (err: any) => {
        window.alert(err);
      },
      complete: () => {
        this.message = 'Meeting added successfully';
        setTimeout(() => {
          this.message = '';
        }, 2_000);
      }
    });
    this.meetingForm.meeting = new Meeting('', '', '', '', '', '', 0, 0);
    form.reset();
  }
}
