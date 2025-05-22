import { Component, Input } from '@angular/core';
import { Vegetables } from '../models/vegetables.model';
import { CartProduct } from '../models/cartproduct.model';

@Component({
  selector: 'app-vegetable-list',
  imports: [],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  @Input() verdura!: Vegetables
  @Input() cart!: CartProduct[]
  aggiungi(nProdotto: HTMLInputElement){
    console.log("Nome: " + this.verdura.nome + " Descrizione: " + this.verdura.descrizione + " Prezzo:  " + this.verdura.prezzo + " Numero prodotti: " + nProdotto.value)
    this.cart.push(new CartProduct(this.verdura.nome, this.verdura.descrizione, this.verdura.prezzo, nProdotto.value))
  }
}
