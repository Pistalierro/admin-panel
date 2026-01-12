import {Routes} from '@angular/router';
import {AdminShellComponent} from './admin-shell/admin-shell.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminShellComponent,
    children: [
      {
        path: 'products',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
      },
      {path: '', redirectTo: 'products', pathMatch: 'full'},
    ]
  }
];
