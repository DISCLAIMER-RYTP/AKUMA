/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CSGOPageComponent } from './CSGOPage.component';

describe('CSGOPageComponent', () => {
  let component: CSGOPageComponent;
  let fixture: ComponentFixture<CSGOPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSGOPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSGOPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
