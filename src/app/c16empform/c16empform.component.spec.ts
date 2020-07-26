import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C16empformComponent } from './c16empform.component';

describe('C16empformComponent', () => {
  let component: C16empformComponent;
  let fixture: ComponentFixture<C16empformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C16empformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C16empformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
