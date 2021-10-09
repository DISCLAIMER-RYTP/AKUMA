/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PUBGPageComponent } from './PUBGPage.component';

describe('PUBGPageComponent', () => {
  let component: PUBGPageComponent;
  let fixture: ComponentFixture<PUBGPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PUBGPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PUBGPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
