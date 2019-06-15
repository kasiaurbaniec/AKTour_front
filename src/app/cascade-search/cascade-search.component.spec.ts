import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeSearchComponent } from './cascade-search.component';

describe('CascadeSearchComponent', () => {
  let component: CascadeSearchComponent;
  let fixture: ComponentFixture<CascadeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
