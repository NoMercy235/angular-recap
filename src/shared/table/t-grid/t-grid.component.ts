import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import { TColumn } from "../t-column/t-column.component";
import { SortDirection } from "../types";
import { TSortIcon } from "../t-sort-icon/t-sort-icon.component";

@Component({
  selector: 't-grid',
  templateUrl: './t-grid.component.html',
  styleUrls: ['./t-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TGrid<T> {
  @Input() data: T;
  @Input() sortable?: boolean = false;

  @Output() sortChange?: EventEmitter<any> = new EventEmitter();
  @Output() paginationChange?: EventEmitter<any> = new EventEmitter();

  @ContentChildren(TColumn) columns: QueryList<TColumn<T>>;
  @ViewChildren(TSortIcon) icons: QueryList<TSortIcon>;

  onSortChange = (column: TColumn<T>, direction: SortDirection) => {
    this.icons
      .filter(icon => icon.property !== column.property)
      .forEach(icon => icon.reset());
    this.sortChange.emit({ column: column.name, direction });
  };

  isSortable = (column: TColumn<T>) => {
    return this.sortable && column.sortable;
  };
}
