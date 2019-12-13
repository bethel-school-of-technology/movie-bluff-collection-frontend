import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesOwnedComponent } from './movies-owned.component';

describe('MoviesOwnedComponent', () => {
  let component: MoviesOwnedComponent;
  let fixture: ComponentFixture<MoviesOwnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesOwnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesOwnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
