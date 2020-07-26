import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C17displayComponent } from './c17display.component';

describe('C17displayComponent', () => {
  let component: C17displayComponent;
  let fixture: ComponentFixture<C17displayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C17displayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C17displayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
