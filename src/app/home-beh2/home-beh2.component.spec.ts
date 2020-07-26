import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeh2Component } from './home-beh2.component';

describe('HomeBeh2Component', () => {
  let component: HomeBeh2Component;
  let fixture: ComponentFixture<HomeBeh2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBeh2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeh2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
