import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedListComponent } from './watched-list.component';

describe('WatchedListComponent', () => {
  let component: WatchedListComponent;
  let fixture: ComponentFixture<WatchedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
