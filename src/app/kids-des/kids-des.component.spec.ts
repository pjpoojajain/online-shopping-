import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsDesComponent } from './kids-des.component';

describe('KidsDesComponent', () => {
  let component: KidsDesComponent;
  let fixture: ComponentFixture<KidsDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
