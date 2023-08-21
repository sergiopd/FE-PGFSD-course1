import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllActivityComponent } from './view-all-activity.component';

describe('ViewAllActivityComponent', () => {
  let component: ViewAllActivityComponent;
  let fixture: ComponentFixture<ViewAllActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
