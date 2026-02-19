import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechAir } from './tech-air';

describe('TechAir', () => {
  let component: TechAir;
  let fixture: ComponentFixture<TechAir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechAir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechAir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
