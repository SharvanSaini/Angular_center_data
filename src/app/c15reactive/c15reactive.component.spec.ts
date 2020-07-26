import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C15reactiveComponent } from './c15reactive.component';

describe('C15reactiveComponent', () => {
  let component: C15reactiveComponent;
  let fixture: ComponentFixture<C15reactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C15reactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C15reactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
