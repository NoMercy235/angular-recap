import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TablePagination } from "../types";
import { ArrowDirection } from "../../components/arrow/arrowType";

@Component({
  selector: 't-pagination',
  templateUrl: './t-pagination.component.html',
  styleUrls: ['./t-pagination.component.scss']
})

export class TPagination {
  @Input() pagination: TablePagination;
  @Output() onPaginationChange: EventEmitter<TablePagination> = new EventEmitter<TablePagination>();

  get arrowDirectionEnum () { return ArrowDirection; }

  isFirstPage = () => this.pagination.page === 1;

  isLastPage = () => {
    const { page, total, pageSize } = this.pagination;
    return page >= (total / pageSize);
  };

  onPreviousPage = () => {
    const newPagination = { ...this.pagination, page: this.pagination.page - 1 };
    this.onPaginationChange.emit(newPagination);
  };

  onNextPage = () => {
    const newPagination = { ...this.pagination, page: this.pagination.page + 1 };
    this.onPaginationChange.emit(newPagination);
  };

  onPageSizeChange = (event) => {
    const { target: { value } } = event;
    const newPagination = { ...this.pagination, pageSize: +value };
    this.onPaginationChange.emit(newPagination);
  };
}
