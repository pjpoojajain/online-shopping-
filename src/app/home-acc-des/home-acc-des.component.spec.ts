import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAccDesComponent } from './home-acc-des.component';

describe('HomeAccDesComponent', () => {
  let component: HomeAccDesComponent;
  let fixture: ComponentFixture<HomeAccDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAccDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAccDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
