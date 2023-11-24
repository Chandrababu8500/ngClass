/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConditonComponent } from './conditon.component';

describe('ConditonComponent', () => {
  let component: ConditonComponent;
  let fixture: ComponentFixture<ConditonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
