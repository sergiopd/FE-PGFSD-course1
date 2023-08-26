import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormMeetingComponent } from '../form-meeting/form-meeting.component';
import { MeetingService } from 'src/app/services/meeting-service.service';
import { Meeting } from 'src/app/models/meetings';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-all-meetings',
  templateUrl: './view-all-meetings.component.html',
  styleUrls: ['./view-all-meetings.component.css'],
})
export class ViewAllMeetingsComponent implements OnInit, OnDestroy {
  @ViewChild(FormMeetingComponent) meetingForm!: FormMeetingComponent;

  public meeting: Meeting = new Meeting('', '', '', '', '', '', 0, 0);
  public meetings: Meeting[] = [];
  public message = '';
  private subscriptions = new Subscription();

  constructor(private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.getMeetings();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public getMeetings() {
    this.subscriptions.add(this.meetingService.getAllMeetings$()
      .subscribe(
        meetingReply => {
          this.meetings = meetingReply;
        }
      ))
  }

  public getMeeting(meetID: number) {
    this.subscriptions.add(this.meetingService.getMeeting$(meetID.toString()).subscribe({
      next: (customerReply) => {
        this.meetingForm.meeting = customerReply[0];
        this.meetingForm.date = this.convertToString(customerReply[0].meetDate);
      }
    })
    );
    this.meetingForm.isEditMeeting = true;
  }

  public updateMeeting(form: NgForm) {
    this.meetingForm.meeting.meetDate = this.meetingForm.date;
    this.subscriptions.add(this.meetingService.updateMeeting$(this.meetingForm.meeting).subscribe({
      complete: () => {
        this.message = 'Meeting updated successfully';
        setTimeout(() => {
          this.message = '';
        }, 2_000);
        this.getMeetings();
        form.reset();
      }
    }));
    this.getMeetings();
  }

  public deleteMeeting(meetID: number, form: NgForm) {
    this.subscriptions.add(this.meetingService.deleteMeeting$(meetID.toString()).subscribe({
      complete: () => {
        this.message = 'Meeting deleted successfully';
        setTimeout(() => {
          this.message = '';
        }, 2_000);
        this.getMeetings();
      }
    }));
    this.meetingForm.meeting = new Meeting('', '', '', '', '', '', 0, 0);
    form.reset();
    this.getMeetings();
  }

  private convertToString(date: string): string {
    const dateForForm = new Date(date);
    const year = dateForForm.getFullYear().toString();
    let month = (dateForForm.getMonth() + 1).toString();
    let day = dateForForm.getDate().toString();
    month = +month < 10 ? '0' + month : month;
    day = +day < 10 ? '0' + day : day;
    return (year + '-' + month + '-' + day);
  }
}
