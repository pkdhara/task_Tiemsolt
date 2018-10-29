import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimeslotComponent } from './view-timeslot.component';

describe('ViewTimeslotComponent', () => {
  let component: ViewTimeslotComponent;
  let fixture: ComponentFixture<ViewTimeslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTimeslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
