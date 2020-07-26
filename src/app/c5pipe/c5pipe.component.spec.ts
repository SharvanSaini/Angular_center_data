import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C5pipeComponent } from './c5pipe.component';

describe('C5pipeComponent', () => {
  let component: C5pipeComponent;
  let fixture: ComponentFixture<C5pipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C5pipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C5pipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
