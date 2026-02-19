import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motorcycling } from './motorcycling';

describe('Motorcycling', () => {
  let component: Motorcycling;
  let fixture: ComponentFixture<Motorcycling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motorcycling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Motorcycling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
