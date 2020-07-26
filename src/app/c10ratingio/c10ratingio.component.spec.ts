import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C10ratingioComponent } from './c10ratingio.component';

describe('C10ratingioComponent', () => {
  let component: C10ratingioComponent;
  let fixture: ComponentFixture<C10ratingioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C10ratingioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C10ratingioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
