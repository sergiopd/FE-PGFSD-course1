import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Meeting } from '../models/meetings';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

  private host: string = 'http://localhost:3000/';

  private urls = {
    getAllMeetings: 'getMeetings',
    getMeeting: 'getMeeting/:email',
    createMeeting: 'addMeeting',
    updateMeeting: 'updateMeeting',
    deleteMeeting: 'deleteMeeting/:meetId'
  }

  public getAllMeetings$(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${this.host}${this.urls.getAllMeetings}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getMeeting$(email: string): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${this.host}${this.urls.getMeeting}${email}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public createMeeting$(customer: Meeting) {
    return this.http.post(`${this.host}${this.urls.createMeeting}`, customer)
      .pipe(
        catchError(this.handleError)
      );
  }

  public updateMeeting$(customer: Meeting) {
    return this.http.put(`${this.host}${this.urls.updateMeeting}`, customer)
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteMeeting$(email: string) {
    return this.http.delete(`${this.host}${this.urls.deleteMeeting}${email}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0)
      console.error('An error ocurred: ' + error.error);
    else
      console.error(`Backend returned code ${error.status} error message is: `, error.error);
    return throwError(() => new Error('An error occurred, please try again later'));
  }
}
