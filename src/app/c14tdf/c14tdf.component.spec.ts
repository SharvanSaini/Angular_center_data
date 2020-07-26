import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C14tdfComponent } from './c14tdf.component';

describe('C14tdfComponent', () => {
  let component: C14tdfComponent;
  let fixture: ComponentFixture<C14tdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C14tdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C14tdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
