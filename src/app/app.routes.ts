import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Productos } from './pages/products/products.component';
import { Contact } from './pages/contact/contact';
import { Carrito } from './pages/carrito/carrito';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: About },
  { path: 'productos', component: Productos },
  { path: 'contacto', component: Contact },
  { path: 'carrito', component: Carrito },

  // Ruta lazy load para ProductDetailComponent (standalone)
  {
    path: 'product-detail/:id',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.component')
        .then(m => m.ProductDetailComponent)
  },

  // Ruta comodín para cualquier ruta no encontrada
  { path: '**', redirectTo: '' }
];
