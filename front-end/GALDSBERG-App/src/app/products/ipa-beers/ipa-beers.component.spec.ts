import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaBeersComponent } from './ipa-beers.component';

describe('IpaBeersComponent', () => {
  let component: IpaBeersComponent;
  let fixture: ComponentFixture<IpaBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpaBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpaBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
