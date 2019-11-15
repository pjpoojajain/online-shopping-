import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyAccDescriptionComponent } from './baby-acc-description.component';

describe('BabyAccDescriptionComponent', () => {
  let component: BabyAccDescriptionComponent;
  let fixture: ComponentFixture<BabyAccDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyAccDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyAccDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
