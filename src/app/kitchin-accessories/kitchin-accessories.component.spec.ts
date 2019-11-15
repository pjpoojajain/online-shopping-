import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchinAccessoriesComponent } from './kitchin-accessories.component';

describe('KitchinAccessoriesComponent', () => {
  let component: KitchinAccessoriesComponent;
  let fixture: ComponentFixture<KitchinAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchinAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchinAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
