import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C8ratingComponent } from './c8rating.component';

describe('C8ratingComponent', () => {
  let component: C8ratingComponent;
  let fixture: ComponentFixture<C8ratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C8ratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C8ratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
