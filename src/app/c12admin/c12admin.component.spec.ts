import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C12adminComponent } from './c12admin.component';

describe('C12adminComponent', () => {
  let component: C12adminComponent;
  let fixture: ComponentFixture<C12adminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C12adminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C12adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
