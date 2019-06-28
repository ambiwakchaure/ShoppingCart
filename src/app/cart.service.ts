import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data =[
    {
      category : 'Pizza',
      expanded : true,
      products : [
        { id : 0, name : 'Salami', price : '250' },
        { id : 1, name : 'Classic', price : '500' },
        { id : 2, name : 'Tuna', price : '300' },
        { id : 3, name : 'Hawai', price : '100' }
      ]
    },
    {
      category : 'Pasta',
      products : [
        { id : 4, name : 'Mac & Cheese', price : '250' },
        { id : 5, name : 'Bolognese', price : '500' }
      ]
    },
    {
      category : 'Salad',
      products : [
        { id : 6, name : 'Ham & Egg', price : '250' },
        { id : 7, name : 'Basic', price : '500' },
        { id : 8, name : 'Ceaser', price : '500' }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts(){
    return this.data;
  }
  getCart(){
    return this.cart;
  }
  addProduct(product){
    this.cart.push(product);
  }


   
}
