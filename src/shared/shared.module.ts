import { NgModule } from '@angular/core';

import { TableModule } from "./table/table.module";

@NgModule({
  exports: [
    TableModule,
  ],
})
export class SharedModule { }
