import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C14tdfvalComponent } from './c14tdfval.component';

describe('C14tdfvalComponent', () => {
  let component: C14tdfvalComponent;
  let fixture: ComponentFixture<C14tdfvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C14tdfvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C14tdfvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
