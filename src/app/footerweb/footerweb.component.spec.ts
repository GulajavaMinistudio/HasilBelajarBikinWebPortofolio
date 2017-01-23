/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterwebComponent } from './footerweb.component';

describe('FooterwebComponent', () => {
  let component: FooterwebComponent;
  let fixture: ComponentFixture<FooterwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
