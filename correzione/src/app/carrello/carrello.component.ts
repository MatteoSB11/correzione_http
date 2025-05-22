import { Component, Input } from '@angular/core';
import { CartProduct } from '../models/cartproduct.model';

@Component({
  selector: 'app-carrello',
  imports: [],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {
  @Input() carre! : CartProduct
}
