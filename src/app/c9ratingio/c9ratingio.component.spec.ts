import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C9ratingioComponent } from './c9ratingio.component';

describe('C9ratingioComponent', () => {
  let component: C9ratingioComponent;
  let fixture: ComponentFixture<C9ratingioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C9ratingioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C9ratingioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
