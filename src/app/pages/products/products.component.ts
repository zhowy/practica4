// src/app/pages/products/products.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';


// ¡RUTA DE IMPORTACIÓN CORREGIDA!
// Debe apuntar a 'products/products.service', no directamente a 'products.service'
import { Product, ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  // Asegúrate de que estas rutas de plantilla también sean correctas y apunten a los nombres de archivo renombrados
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class Productos implements OnInit { // Tu clase se llama Productos
  productos : Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService){
    // La inicialización de datos va en ngOnInit
  }

  ngOnInit(): void {
    
    this.productos = this.productsService.getAllProducts(); // <-- Usando getAllProducts() como en el servicio corregido
  }
  agregarAlCarrito(producto: Product) {
  this.cartService.addToCart(producto);
  console.log('Producto agregado:', producto);
}
}