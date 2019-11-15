import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WathesComponent } from './wathes.component';

describe('WathesComponent', () => {
  let component: WathesComponent;
  let fixture: ComponentFixture<WathesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WathesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WathesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
