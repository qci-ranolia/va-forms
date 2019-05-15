import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGraphComponent } from './schedule-graph.component';

describe('ScheduleGraphComponent', () => {
  let component: ScheduleGraphComponent;
  let fixture: ComponentFixture<ScheduleGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
