import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetListTableComponent } from './set-list-table.component';

describe('SetListTableComponent', () => {
  let component: SetListTableComponent;
  let fixture: ComponentFixture<SetListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
