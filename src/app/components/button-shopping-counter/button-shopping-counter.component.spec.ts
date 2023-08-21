import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShoppingCounterComponent } from './button-shopping-counter.component';

describe('ButtonShoppingCounterComponent', () => {
  let component: ButtonShoppingCounterComponent;
  let fixture: ComponentFixture<ButtonShoppingCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonShoppingCounterComponent]
    });
    fixture = TestBed.createComponent(ButtonShoppingCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
