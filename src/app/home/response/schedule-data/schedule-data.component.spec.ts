import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDataComponent } from './schedule-data.component';

describe('ScheduleDataComponent', () => {
  let component: ScheduleDataComponent;
  let fixture: ComponentFixture<ScheduleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
