import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'datatabels',
        loadChildren: () => import('./features/data-tabels/data-tabels.module').then(m => m.DataTabelsModule)
      },
      {
        path: '',
        redirectTo: '/datatabels',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
