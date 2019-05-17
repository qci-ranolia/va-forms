import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccapabComponent } from './proccapab.component';

describe('ProccapabComponent', () => {
  let component: ProccapabComponent;
  let fixture: ComponentFixture<ProccapabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProccapabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProccapabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
