// Importamos las dependencias necesarias de Angular.
import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounter } from 'src/app/state/selector';

@Component({
  selector: 'app-button-shopping-counter',
  templateUrl: './button-shopping-counter.component.html',
  styleUrls: ['./button-shopping-counter.component.scss']
})
export class ButtonShoppingCounterComponent {

  // Declaramos una variable 'counter$' que se asocia a un Observable del contador desde el estado global.
  public counter$ = this.store.select(selectCounter);

  constructor(private store: Store<any>) {
   
  }
  
  // Declaramos una variable booleana 'isSticky' para controlar el comportamiento pegajoso del componente.
  isSticky: boolean = false;

  // Usamos el decorador @HostListener para escuchar el evento de desplazamiento de la ventana.
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Cuando el desplazamiento vertical de la ventana supera 130 píxeles, cambiamos 'isSticky' a true.
    this.isSticky = window.pageYOffset >= 130;
  }

  public navigate (): void{
    // Aquí puedes implementar la lógica de navegación cuando se haga clic en el botón, si es necesario.
  }
}
