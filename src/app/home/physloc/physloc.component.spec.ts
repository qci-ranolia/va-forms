import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyslocComponent } from './physloc.component';

describe('PhyslocComponent', () => {
  let component: PhyslocComponent;
  let fixture: ComponentFixture<PhyslocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyslocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyslocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
