import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule { }
