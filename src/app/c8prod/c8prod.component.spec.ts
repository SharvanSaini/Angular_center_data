import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C8prodComponent } from './c8prod.component';

describe('C8prodComponent', () => {
  let component: C8prodComponent;
  let fixture: ComponentFixture<C8prodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C8prodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C8prodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
