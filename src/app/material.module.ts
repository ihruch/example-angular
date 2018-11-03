import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule

  ],
  exports: [
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
 
})
export class MaterialModule { }
