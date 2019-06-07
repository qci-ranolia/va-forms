import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesorFeedbackComponent } from './assesor-feedback.component';

describe('AssesorFeedbackComponent', () => {
  let component: AssesorFeedbackComponent;
  let fixture: ComponentFixture<AssesorFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssesorFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesorFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
