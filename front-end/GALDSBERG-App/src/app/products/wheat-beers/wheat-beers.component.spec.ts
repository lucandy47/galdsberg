import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatBeersComponent } from './wheat-beers.component';

describe('WheatBeersComponent', () => {
  let component: WheatBeersComponent;
  let fixture: ComponentFixture<WheatBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheatBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
