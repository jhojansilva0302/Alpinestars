import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sportswear } from './sportswear';

describe('Sportswear', () => {
  let component: Sportswear;
  let fixture: ComponentFixture<Sportswear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sportswear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sportswear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
