import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TGrid } from "./t-grid/t-grid.component";

@NgModule({
  declarations: [
    TGrid
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TGrid
  ]
})
export class TableModule { }
