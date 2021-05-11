import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { People2Component } from './people2.component';

describe('People2Component', () => {
  let component: People2Component;
  let fixture: ComponentFixture<People2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ People2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(People2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
