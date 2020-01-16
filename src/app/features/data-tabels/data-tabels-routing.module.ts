import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTabelListComponent } from './data-tabel-list/data-tabel-list.component';

const routes: Routes = [{
  path:'',
  component:DataTabelListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTabelsRoutingModule { }
