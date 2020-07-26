import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { TColumn } from "../t-column/t-column.component";
import { SortDirection } from "../utils";

@Component({
  selector: 't-grid',
  templateUrl: './t-grid.component.html',
  styleUrls: ['./t-grid.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TGrid<T> {
  @Input() data: T;
  @Input() sortable: boolean;

  @Output() sortChange?: EventEmitter<any> = new EventEmitter();
  @Output() paginationChange?: EventEmitter<any> = new EventEmitter();

  @ContentChildren(TColumn) columns: QueryList<TColumn<T>>;

  onSortChange = (column: keyof T, direction: SortDirection) => {
    this.sortChange.emit({ column, direction });
  };
}
