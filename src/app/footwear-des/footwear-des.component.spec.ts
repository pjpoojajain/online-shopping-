import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwearDesComponent } from './footwear-des.component';

describe('FootwearDesComponent', () => {
  let component: FootwearDesComponent;
  let fixture: ComponentFixture<FootwearDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootwearDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootwearDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
