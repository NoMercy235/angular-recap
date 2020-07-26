import { Component, Input } from '@angular/core';
import { TablePagination } from "../types";

@Component({
  selector: 't-pagination',
  templateUrl: './t-pagination.component.html',
  styleUrls: ['./t-pagination.component.scss']
})

export class TPagination {
  @Input() pagination: TablePagination;
}
