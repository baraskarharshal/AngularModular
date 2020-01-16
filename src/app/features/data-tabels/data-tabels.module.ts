import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTabelsRoutingModule } from './data-tabels-routing.module';
import { DataTabelListComponent } from './data-tabel-list/data-tabel-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTabelViewComponent } from './data-tabel-view/data-tabel-view.component';
import { NgxsModule } from '@ngxs/store';
import { DataTabelState } from './state/datatabel.state';

const ngxsModule = NgxsModule.forRoot([DataTabelState]);

@NgModule({
  declarations: [DataTabelListComponent, DataTabelViewComponent],
  imports: [
    CommonModule,
    DataTabelsRoutingModule,
    SharedModule,
    ngxsModule
  ],
  entryComponents:[DataTabelViewComponent]
})
export class DataTabelsModule { }
