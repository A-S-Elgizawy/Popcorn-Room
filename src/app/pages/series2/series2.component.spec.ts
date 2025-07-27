import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Series2Component } from './series2.component';

describe('Series2Component', () => {
  let component: Series2Component;
  let fixture: ComponentFixture<Series2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Series2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Series2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
