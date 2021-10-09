/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValorantPageComponent } from './ValorantPage.component';

describe('ValorantPageComponent', () => {
  let component: ValorantPageComponent;
  let fixture: ComponentFixture<ValorantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
