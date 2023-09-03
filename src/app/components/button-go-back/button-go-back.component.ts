import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-button-go-back',
  templateUrl: './button-go-back.component.html',
  styleUrls: ['./button-go-back.component.scss']
  
})
export class ButtonGoBackComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}
