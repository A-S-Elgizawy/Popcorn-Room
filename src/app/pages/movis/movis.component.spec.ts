import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovisComponent } from './movis.component';

describe('MovisComponent', () => {
  let component: MovisComponent;
  let fixture: ComponentFixture<MovisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
