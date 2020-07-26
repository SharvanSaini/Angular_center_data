import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C9prodioComponent } from './c9prodio.component';

describe('C9prodioComponent', () => {
  let component: C9prodioComponent;
  let fixture: ComponentFixture<C9prodioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C9prodioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C9prodioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
