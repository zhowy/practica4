import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { Product } from '../../services/products.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito implements OnInit { 
  productosCarrito: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void { 
    this.productosCarrito = this.cartService.getCart();
  }

  vaciarCarrito() {
    this.cartService.clearCart();
    this.productosCarrito = [];
  }

  quitarProducto(productoId: number): void {
  this.cartService.removeFromCart(productoId);
  this.productosCarrito = this.cartService.getCart(); // Actualiza la lista local
}

}
