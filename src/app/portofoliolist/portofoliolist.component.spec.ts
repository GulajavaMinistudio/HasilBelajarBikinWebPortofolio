/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortofoliolistComponent } from './portofoliolist.component';

describe('PortofoliolistComponent', () => {
  let component: PortofoliolistComponent;
  let fixture: ComponentFixture<PortofoliolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortofoliolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortofoliolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
