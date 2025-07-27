import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Series1Component } from './series1.component';

describe('Series1Component', () => {
  let component: Series1Component;
  let fixture: ComponentFixture<Series1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Series1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Series1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
