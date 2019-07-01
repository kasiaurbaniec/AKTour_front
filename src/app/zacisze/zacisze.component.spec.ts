import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaciszeComponent } from './zacisze.component';

describe('ZaciszeComponent', () => {
  let component: ZaciszeComponent;
  let fixture: ComponentFixture<ZaciszeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaciszeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaciszeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
