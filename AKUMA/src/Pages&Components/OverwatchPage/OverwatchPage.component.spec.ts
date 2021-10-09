/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OverwatchPageComponent } from './OverwatchPage.component';

describe('OverwatchPageComponent', () => {
  let component: OverwatchPageComponent;
  let fixture: ComponentFixture<OverwatchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverwatchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverwatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
