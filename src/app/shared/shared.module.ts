import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarComponent } from './components/avatar/avatar.component';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatExpansionModule,
  MatBadgeModule,
  MatSidenavModule
];
@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ...materialModules,
    FlexLayoutModule,

    HttpClientModule,
    ReactiveFormsModule,

    AvatarComponent,
  ],
})
export class SharedModule { }
