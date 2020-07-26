import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeh4Component } from './home-beh4.component';

describe('HomeBeh4Component', () => {
  let component: HomeBeh4Component;
  let fixture: ComponentFixture<HomeBeh4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBeh4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeh4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
