import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautiComponent } from './beauti.component';

describe('BeautiComponent', () => {
  let component: BeautiComponent;
  let fixture: ComponentFixture<BeautiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
