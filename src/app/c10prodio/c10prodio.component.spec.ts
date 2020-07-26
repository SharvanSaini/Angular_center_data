import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C10prodioComponent } from './c10prodio.component';

describe('C10prodioComponent', () => {
  let component: C10prodioComponent;
  let fixture: ComponentFixture<C10prodioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C10prodioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C10prodioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
