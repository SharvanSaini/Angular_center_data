import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadingfirstcomponentComponent } from './lazyloadingfirstcomponent.component';

describe('LazyloadingfirstcomponentComponent', () => {
  let component: LazyloadingfirstcomponentComponent;
  let fixture: ComponentFixture<LazyloadingfirstcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadingfirstcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadingfirstcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
