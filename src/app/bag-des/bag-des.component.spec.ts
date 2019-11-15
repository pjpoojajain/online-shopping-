import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagDesComponent } from './bag-des.component';

describe('BagDesComponent', () => {
  let component: BagDesComponent;
  let fixture: ComponentFixture<BagDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
