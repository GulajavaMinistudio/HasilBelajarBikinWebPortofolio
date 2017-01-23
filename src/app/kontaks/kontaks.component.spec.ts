/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KontaksComponent } from './kontaks.component';

describe('KontaksComponent', () => {
  let component: KontaksComponent;
  let fixture: ComponentFixture<KontaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
