import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TGrid } from "./t-grid/t-grid.component";
import { TColumn } from "./t-column/t-column.component";
import { TSortIcon } from "./t-sort-icon/t-sort-icon.component";
import { TPagination } from "./t-pagination/t-pagination.component";

@NgModule({
  declarations: [
    TGrid,
    TColumn,
    TSortIcon,
    TPagination,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TGrid,
    TColumn,
    TSortIcon,
    TPagination,
  ],
})
export class TableModule { }
