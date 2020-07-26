import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import { TColumn } from "../t-column/t-column.component";
import { SortDirection, TablePagination, TableSort } from "../types";
import { TSortIcon } from "../t-sort-icon/t-sort-icon.component";

@Component({
  selector: 't-grid',
  templateUrl: './t-grid.component.html',
  styleUrls: ['./t-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TGrid<T> implements OnChanges {
  @Input() data: T[];
  @Input() sortable?: boolean = false;
  @Input() pageSize?: number;

  @Output() sortChange?: EventEmitter<TableSort> = new EventEmitter();
  @Output() paginationChange?: EventEmitter<TablePagination> = new EventEmitter();

  @ContentChildren(TColumn) columns: QueryList<TColumn<T>>;
  @ViewChildren(TSortIcon) icons: QueryList<TSortIcon>;

  sort: TableSort;
  pagination: TablePagination;

  ngOnChanges () {
    this.pageSize && this.setPagination(1);
  }

  getSortedData = (data: T[]) => {
    if (!this.sort || this.sort.direction === SortDirection.None) return data;

    const { column, direction } = this.sort;
    const numberDirection = direction === SortDirection.Descending ? 1 : -1;
    return data.sort((el1, el2) => {
      return el1[column] < el2[column] ? numberDirection : -numberDirection;
    });
  };

  getPaginatedData = (data: T[]) => {
    if (!this.pagination) return data;

    const { page, pageSize } = this.pagination;

    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  };

  getData = () => {
    return this.getPaginatedData(this.getSortedData(this.data.slice()));
  };

  onSortChange = (column: TColumn<T>, direction: SortDirection) => {
    this.icons
      .filter(icon => icon.property !== column.property)
      .forEach(icon => icon.reset());
    this.sort = { column: column.property as string, direction };
    this.sortChange.emit(this.sort);
  };

  isSortable = (column: TColumn<T>) => {
    return this.sortable && column.sortable;
  };

  setPagination = (page) => {
    this.pagination = {
      total: this.data.length,
      page: page,
      pageSize: this.pageSize,
    };
  };

  onPaginationChange = (pagination: TablePagination) => {
    this.paginationChange.emit(pagination);
    this.setPagination(pagination.page);
  };
}
