import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesMoveiesComponent } from './types-moveies.component';

describe('TypesMoveiesComponent', () => {
  let component: TypesMoveiesComponent;
  let fixture: ComponentFixture<TypesMoveiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesMoveiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesMoveiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
