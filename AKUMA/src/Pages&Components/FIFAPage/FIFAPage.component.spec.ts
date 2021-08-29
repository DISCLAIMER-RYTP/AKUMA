/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FIFAPageComponent } from './FIFAPage.component';

describe('FIFAPageComponent', () => {
  let component: FIFAPageComponent;
  let fixture: ComponentFixture<FIFAPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FIFAPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FIFAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
