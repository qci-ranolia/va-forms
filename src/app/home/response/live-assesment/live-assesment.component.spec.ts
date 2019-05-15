import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAssesmentComponent } from './live-assesment.component';

describe('LiveAssesmentComponent', () => {
  let component: LiveAssesmentComponent;
  let fixture: ComponentFixture<LiveAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
