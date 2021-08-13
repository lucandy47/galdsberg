import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyBeersComponent } from './specialty-beers.component';

describe('SpecialtyBeersComponent', () => {
  let component: SpecialtyBeersComponent;
  let fixture: ComponentFixture<SpecialtyBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialtyBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
