export class CartProduct{
    nome : string
    descrizione : string
    prezzo : string 
    nProdotto : string
    constructor(nome : string, descrizione : string, prezzo : string, nProdotto : string){
        this.nome = nome
        this.descrizione = descrizione
        this.prezzo = prezzo
        this.nProdotto = nProdotto
    }
}