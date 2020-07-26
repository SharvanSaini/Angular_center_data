import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C11catComponent } from './c11cat.component';

describe('C11catComponent', () => {
  let component: C11catComponent;
  let fixture: ComponentFixture<C11catComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C11catComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C11catComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
