import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenDesComponent } from './men-des.component';

describe('MenDesComponent', () => {
  let component: MenDesComponent;
  let fixture: ComponentFixture<MenDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
