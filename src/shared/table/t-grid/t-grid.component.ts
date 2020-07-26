import { ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation } from '@angular/core';

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
}
