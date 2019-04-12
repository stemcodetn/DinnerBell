import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaldetailPage } from './globaldetail.page';

describe('GlobaldetailPage', () => {
  let component: GlobaldetailPage;
  let fixture: ComponentFixture<GlobaldetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobaldetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobaldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
