import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevComponent } from './rdev.component';

describe('RdevComponent', () => {
  let component: RdevComponent;
  let fixture: ComponentFixture<RdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
