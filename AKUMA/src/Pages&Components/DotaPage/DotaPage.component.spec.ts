/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DotaPageComponent } from './DotaPage.component';

describe('DotaPageComponent', () => {
  let component: DotaPageComponent;
  let fixture: ComponentFixture<DotaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
