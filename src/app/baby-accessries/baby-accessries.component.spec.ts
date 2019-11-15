import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyAccessriesComponent } from './baby-accessries.component';

describe('BabyAccessriesComponent', () => {
  let component: BabyAccessriesComponent;
  let fixture: ComponentFixture<BabyAccessriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyAccessriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyAccessriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
