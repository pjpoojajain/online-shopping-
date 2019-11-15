import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanDesComponent } from './woman-des.component';

describe('WomanDesComponent', () => {
  let component: WomanDesComponent;
  let fixture: ComponentFixture<WomanDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
