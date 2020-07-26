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
import { SortDirection, TablePagination } from "../types";
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

  @Output() sortChange?: EventEmitter<any> = new EventEmitter();
  @Output() paginationChange?: EventEmitter<any> = new EventEmitter();

  @ContentChildren(TColumn) columns: QueryList<TColumn<T>>;
  @ViewChildren(TSortIcon) icons: QueryList<TSortIcon>;

  pagination: TablePagination;

  ngOnChanges () {
    this.setPagination(1);
  }

  getData = () => {
    if (!this.pageSize) return this.data;

    const { page, pageSize } = this.pagination;

    const start = (page - 1) * pageSize;
    return this.data.slice(start, start + pageSize);
  };

  onSortChange = (column: TColumn<T>, direction: SortDirection) => {
    this.icons
      .filter(icon => icon.property !== column.property)
      .forEach(icon => icon.reset());
    this.sortChange.emit({ column: column.name, direction });
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
