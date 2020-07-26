import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C13dashboardComponent } from './c13dashboard.component';

describe('C13dashboardComponent', () => {
  let component: C13dashboardComponent;
  let fixture: ComponentFixture<C13dashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C13dashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C13dashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
