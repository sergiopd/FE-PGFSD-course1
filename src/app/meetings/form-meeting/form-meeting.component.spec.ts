import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMeetingComponent } from './form-meeting.component';

describe('FormMeetingComponent', () => {
  let component: FormMeetingComponent;
  let fixture: ComponentFixture<FormMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
