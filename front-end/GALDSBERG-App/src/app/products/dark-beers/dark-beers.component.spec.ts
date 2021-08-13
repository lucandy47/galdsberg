import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkBeersComponent } from './dark-beers.component';

describe('DarkBeersComponent', () => {
  let component: DarkBeersComponent;
  let fixture: ComponentFixture<DarkBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
