import { Component, Input } from '@angular/core';
import { TablePagination } from "../types";
import { ArrowDirection } from "../../components/arrow/arrowType";

@Component({
  selector: 't-pagination',
  templateUrl: './t-pagination.component.html',
  styleUrls: ['./t-pagination.component.scss']
})

export class TPagination {
  @Input() pagination: TablePagination;

  get arrowDirectionEnum () { return ArrowDirection; }

  isFirstPage = () => this.pagination.page === 1;

  isLastPage = () => {
    const { page, total, pageSize } = this.pagination;
    return page >= (total / pageSize);
  };
}
