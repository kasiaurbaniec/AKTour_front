import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeCorbusiereComponent } from './le-corbusiere.component';

describe('LeCorbusiereComponent', () => {
  let component: LeCorbusiereComponent;
  let fixture: ComponentFixture<LeCorbusiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeCorbusiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeCorbusiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
