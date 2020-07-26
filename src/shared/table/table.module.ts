import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TGrid } from "./t-grid/t-grid.component";
import { TColumn } from "./t-column/t-column.component";
import { TSortIcon } from "./t-sort-icon/t-sort-icon.component";

@NgModule({
  declarations: [
    TGrid,
    TColumn,
    TSortIcon,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TGrid,
    TColumn,
    TSortIcon,
  ],
})
export class TableModule { }
