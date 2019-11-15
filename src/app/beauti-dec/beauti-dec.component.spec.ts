import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautiDecComponent } from './beauti-dec.component';

describe('BeautiDecComponent', () => {
  let component: BeautiDecComponent;
  let fixture: ComponentFixture<BeautiDecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautiDecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautiDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
