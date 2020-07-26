import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeh3Component } from './home-beh3.component';

describe('HomeBeh3Component', () => {
  let component: HomeBeh3Component;
  let fixture: ComponentFixture<HomeBeh3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBeh3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeh3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
