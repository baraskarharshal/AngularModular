import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
  ]
})
export class CoreModule { }
