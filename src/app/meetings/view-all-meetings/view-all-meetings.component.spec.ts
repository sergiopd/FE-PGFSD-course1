import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMeetingsComponent } from './view-all-meetings.component';

describe('ViewAllMeetingsComponent', () => {
  let component: ViewAllMeetingsComponent;
  let fixture: ComponentFixture<ViewAllMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllMeetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
