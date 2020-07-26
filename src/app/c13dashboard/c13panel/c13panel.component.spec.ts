import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C13panelComponent } from './c13panel.component';

describe('C13panelComponent', () => {
  let component: C13panelComponent;
  let fixture: ComponentFixture<C13panelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C13panelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C13panelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
