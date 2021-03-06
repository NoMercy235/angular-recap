import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 't-column',
  templateUrl: './t-column.component.html',
  styleUrls: ['./t-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TColumn<T> {
  @Input() name: string;
  @Input() property: keyof T;
  @Input() sortable?: boolean = false;
}
