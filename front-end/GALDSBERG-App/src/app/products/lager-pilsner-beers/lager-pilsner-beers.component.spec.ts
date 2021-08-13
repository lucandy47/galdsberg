import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagerPilsnerBeersComponent } from './lager-pilsner-beers.component';

describe('LagerPilsnerBeersComponent', () => {
  let component: LagerPilsnerBeersComponent;
  let fixture: ComponentFixture<LagerPilsnerBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagerPilsnerBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagerPilsnerBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
