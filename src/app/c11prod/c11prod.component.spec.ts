import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C11prodComponent } from './c11prod.component';

describe('C11prodComponent', () => {
  let component: C11prodComponent;
  let fixture: ComponentFixture<C11prodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C11prodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C11prodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
