import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticFormComponent } from './arithmetic-form.component';

describe('ArithmeticFormComponent', () => {
  let component: ArithmeticFormComponent;
  let fixture: ComponentFixture<ArithmeticFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArithmeticFormComponent]
    });
    fixture = TestBed.createComponent(ArithmeticFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
