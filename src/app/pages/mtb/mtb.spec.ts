import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTB } from './mtb';

describe('MTB', () => {
  let component: MTB;
  let fixture: ComponentFixture<MTB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MTB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
