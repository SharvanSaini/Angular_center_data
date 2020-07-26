import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C7ratingComponent } from './c7rating.component';

describe('C7ratingComponent', () => {
  let component: C7ratingComponent;
  let fixture: ComponentFixture<C7ratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C7ratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C7ratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
