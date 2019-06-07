import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupcomponentComponent } from './backupcomponent.component';

describe('BackupcomponentComponent', () => {
  let component: BackupcomponentComponent;
  let fixture: ComponentFixture<BackupcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
