import { NgModule } from '@angular/core';

import { TableModule } from "./table/table.module";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "./components/components.module";

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ComponentsModule,
    TableModule,
  ],
})
export class SharedModule { }
