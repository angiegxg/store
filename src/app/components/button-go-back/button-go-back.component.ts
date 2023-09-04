// Importamos las dependencias necesarias de Angular.
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-button-go-back',
  templateUrl: './button-go-back.component.html',
  styleUrls: ['./button-go-back.component.scss']
})
export class ButtonGoBackComponent {
  constructor(private location: Location) {}

  // Método para retroceder a la página anterior en la historia de navegación.
  goBack(): void {
    this.location.back();
  }
}
