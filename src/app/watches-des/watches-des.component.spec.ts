import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchesDesComponent } from './watches-des.component';

describe('WatchesDesComponent', () => {
  let component: WatchesDesComponent;
  let fixture: ComponentFixture<WatchesDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchesDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchesDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
