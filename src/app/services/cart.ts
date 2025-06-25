// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from './products.service'; // Asegúrate que la ruta coincida

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
  removeFromCart(productId: number): void {
  this.cart = this.cart.filter(p => p.id !== productId);
}
}
