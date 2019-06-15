import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsAllComponent } from './hotels-all.component';

describe('HotelsAllComponent', () => {
  let component: HotelsAllComponent;
  let fixture: ComponentFixture<HotelsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
