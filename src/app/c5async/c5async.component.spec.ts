import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C5asyncComponent } from './c5async.component';

describe('C5asyncComponent', () => {
  let component: C5asyncComponent;
  let fixture: ComponentFixture<C5asyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C5asyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C5asyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
