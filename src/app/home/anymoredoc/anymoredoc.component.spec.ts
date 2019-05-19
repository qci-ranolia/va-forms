import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnymoredocComponent } from './anymoredoc.component';

describe('AnymoredocComponent', () => {
  let component: AnymoredocComponent;
  let fixture: ComponentFixture<AnymoredocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnymoredocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnymoredocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
