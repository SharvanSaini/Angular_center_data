import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C13infoComponent } from './c13info.component';

describe('C13infoComponent', () => {
  let component: C13infoComponent;
  let fixture: ComponentFixture<C13infoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C13infoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C13infoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
