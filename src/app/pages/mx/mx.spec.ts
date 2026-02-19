import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MX } from './mx';

describe('MX', () => {
  let component: MX;
  let fixture: ComponentFixture<MX>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MX]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MX);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
