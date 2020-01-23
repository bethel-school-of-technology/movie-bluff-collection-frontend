import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedListComponent } from './owned-list.component';

describe('OwnedListComponent', () => {
  let component: OwnedListComponent;
  let fixture: ComponentFixture<OwnedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
