import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemliveviewComponent } from './gemliveview.component';

describe('GemliveviewComponent', () => {
  let component: GemliveviewComponent;
  let fixture: ComponentFixture<GemliveviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemliveviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemliveviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
