import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Arrow } from "./arrow/arrow.component";

@NgModule({
  declarations: [
    Arrow
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Arrow,
  ],
})
export class ComponentsModule { }
