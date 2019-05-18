import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcustomdialogComponent } from './dcustomdialog.component';

describe('DcustomdialogComponent', () => {
  let component: DcustomdialogComponent;
  let fixture: ComponentFixture<DcustomdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcustomdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcustomdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
