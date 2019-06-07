import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcapacComponent } from './prodcapac.component';

describe('ProdcapacComponent', () => {
  let component: ProdcapacComponent;
  let fixture: ComponentFixture<ProdcapacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcapacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcapacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
