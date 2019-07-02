import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiltonComponent } from './hilton.component';

describe('HiltonComponent', () => {
  let component: HiltonComponent;
  let fixture: ComponentFixture<HiltonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiltonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
