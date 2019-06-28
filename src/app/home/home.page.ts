import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  cart = [];
  items = [];

  //need slider configuration
  sliderConfig = {

  }
  constructor(
    private cartService : CartService,
    private router : Router) {}

  ngOnInit(){
    //make call cart service is call
    this.cart = this.cartService.getCart();
    //all changes reflected when you add item on cart
    this.items = this.cartService.getProducts();
  }

  addToCart(product){
    this.cartService.addProduct(product);
  }
  openCart(){
    this.router.navigate['cart'];
  }

}
