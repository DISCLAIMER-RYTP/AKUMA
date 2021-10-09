/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RSSPageComponent } from './RSSPage.component';

describe('RSSPageComponent', () => {
  let component: RSSPageComponent;
  let fixture: ComponentFixture<RSSPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSSPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RSSPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
