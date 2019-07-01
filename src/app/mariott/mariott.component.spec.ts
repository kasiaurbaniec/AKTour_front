import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MariottComponent } from './mariott.component';

describe('MariottComponent', () => {
  let component: MariottComponent;
  let fixture: ComponentFixture<MariottComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MariottComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MariottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
