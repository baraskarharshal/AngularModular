import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopnavComponent } from './topnav/topnav.component';
import { NgxsModule } from '@ngxs/store';
import { DataTabelsModule } from 'src/app/features/data-tabels/data-tabels.module';

@NgModule({
  declarations: [LayoutComponent,TopnavComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class LayoutModule { }
