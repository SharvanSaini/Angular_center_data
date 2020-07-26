import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C6customComponent } from './c6custom.component';

describe('C6customComponent', () => {
  let component: C6customComponent;
  let fixture: ComponentFixture<C6customComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C6customComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C6customComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
