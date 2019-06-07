import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnymoreimagComponent } from './anymoreimag.component';

describe('AnymoreimagComponent', () => {
  let component: AnymoreimagComponent;
  let fixture: ComponentFixture<AnymoreimagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnymoreimagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnymoreimagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
