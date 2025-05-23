import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Vegetables } from './models/vegetables.model';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { CartProduct } from './models/cartproduct.model';
import { DetailsComponent } from './details/details.component';
import { CarrelloComponent } from './carrello/carrello.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VegetableListComponent, DetailsComponent, CarrelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'correzione';
  http : HttpClient
  obs! : Observable<Vegetables[]>
  loading! : boolean
  vettVerdure : Vegetables[] = []
  vettCart : CartProduct[] = []
  constructor(http: HttpClient){
    this.http = http
  }
  Richiesta(){
    this.loading = true
    this.obs = this.http.get<Vegetables[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure')
    this.obs.subscribe(this.getData)


  }
  getData = (d : Vegetables[]) =>{
    this.vettVerdure = d
    this.loading = false
  }
  ngOnInit(): void {
    this.Richiesta()
  }
}
