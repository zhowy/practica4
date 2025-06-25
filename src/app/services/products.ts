import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Red Magic 10s Pro',
      descripcion : 'El Mas Potente Del Mundo',
      precio: 16500,
      imagen: '/img/r1.jpeg'
    },
    {
      id: 2,
      nombre: 'Pixel 9 pro XL',
      descripcion: 'Potente y elegante',
      precio: 29200,
      imagen: '/img/pixel.jpeg'
    },
    {
      id: 3,
      nombre: 'Galaxy Fold 6',
      descripcion: 'Una tablet compacta',
      precio: 39000,
      imagen: '/img/fold.jpeg'
    },
   {
      id: 4,
      nombre: 'Rog Phone 8 pro',
      descripcion: 'Ideal para gamin',
      precio: 33900,
      imagen: '/img/rog.png'
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
