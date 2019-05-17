import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspComponent } from './transp.component';

describe('TranspComponent', () => {
  let component: TranspComponent;
  let fixture: ComponentFixture<TranspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
