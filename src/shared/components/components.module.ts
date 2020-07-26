import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Arrow } from "./arrow/arrow.component";
import { ProgressIndicator } from "./progress-indicator/progress-indicator.component";

@NgModule({
  declarations: [
    Arrow,
    ProgressIndicator,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Arrow,
    ProgressIndicator,
  ],
})
export class ComponentsModule { }
