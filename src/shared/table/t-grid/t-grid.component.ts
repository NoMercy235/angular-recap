import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { TColumn } from "../t-column/t-column.component";

@Component({
  selector: 't-grid',
  templateUrl: './t-grid.component.html',
  styleUrls: ['./t-grid.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TGrid<T> {
  @Input() data: T;

  @Output() sortChange?: () => {};
  @Output() paginationChange?: () => {};

  @ContentChildren(TColumn) columns: QueryList<TColumn<T>>;
}
