import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShoppingComponent } from './button-shopping.component';

describe('ButtonShoppingComponent', () => {
  let component: ButtonShoppingComponent;
  let fixture: ComponentFixture<ButtonShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonShoppingComponent]
    });
    fixture = TestBed.createComponent(ButtonShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
