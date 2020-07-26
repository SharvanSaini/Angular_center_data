import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C7prodComponent } from './c7prod.component';

describe('C7prodComponent', () => {
  let component: C7prodComponent;
  let fixture: ComponentFixture<C7prodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C7prodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C7prodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
