// src/app/services/products/products.service.ts
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsData: Product[] = [
    { id: 1, nombre: 'One Plus 11', descripcion: 'Potente y elegante', precio: 18450, imagen: '/img/s1.png' },
    { id: 2, nombre: 'Rog Phone 8 Pro', descripcion: 'Ideal para EL Gamin', precio: 32000, imagen: '/img/s2.png' },
    { id: 3, nombre: 'Pixel 9 Pro XL', descripcion: 'El mejor', precio: 25000, imagen: '/img/s3.png' },
    { id: 4, nombre: 'Samsung S 24 Ultra', descripcion: 'Siente el Ultra', precio: 25000, imagen: '/img/s4.png' }
  ];

  constructor() {}

  getAllProducts(): Product[] {
    return this.productsData;
  }

  getProductById(id: number): Observable<Product | undefined> {
    const producto = this.productsData.find(product => product.id === id);
    return of(producto); // <- CORREGIDO: ahora devuelve Observable
  }
}
