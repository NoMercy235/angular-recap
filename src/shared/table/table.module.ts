import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TGrid } from "./t-grid/t-grid.component";
import { TColumn } from "./t-column/t-column.component";

@NgModule({
  declarations: [
    TGrid,
    TColumn,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TGrid,
    TColumn,
  ]
})
export class TableModule { }
