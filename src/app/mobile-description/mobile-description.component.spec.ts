import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDescriptionComponent } from './mobile-description.component';

describe('MobileDescriptionComponent', () => {
  let component: MobileDescriptionComponent;
  let fixture: ComponentFixture<MobileDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
