import { NgModule } from '@angular/core';

import { TGrid } from "./t-grid/t-grid.component";

@NgModule({
  declarations: [
    TGrid
  ],
  exports: [
    TGrid
  ]
})
export class TableModule { }
