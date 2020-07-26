import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeh1Component } from './home-beh1.component';

describe('HomeBeh1Component', () => {
  let component: HomeBeh1Component;
  let fixture: ComponentFixture<HomeBeh1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBeh1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
