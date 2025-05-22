import { Component, Input } from '@angular/core';
import { Vegetables } from '../models/vegetables.model';

@Component({
  selector: 'app-vegetable-list',
  imports: [],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  @Input() verdura!: Vegetables
  aggiungi(nProdotto: HTMLInputElement){
    console.log("Nome: " + this.verdura.nome + " Descrizione: " + this.verdura.descrizione + " Prezzo:  " + this.verdura.prezzo + " Numero prodotti: " + nProdotto.value)
  }
}
