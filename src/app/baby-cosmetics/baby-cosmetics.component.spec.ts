import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyCosmeticsComponent } from './baby-cosmetics.component';

describe('BabyCosmeticsComponent', () => {
  let component: BabyCosmeticsComponent;
  let fixture: ComponentFixture<BabyCosmeticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyCosmeticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
