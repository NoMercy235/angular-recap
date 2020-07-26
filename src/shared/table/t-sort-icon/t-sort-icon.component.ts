import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { SortDirection } from "../types";
import { getNextDirection } from "../utils";

@Component({
  selector: 't-sort-icon',
  templateUrl: 't-sort-icon.component.html',
  styleUrls: ['./t-sort-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TSortIcon {
  @Input() property: string;
  @Output() onSortChange: EventEmitter<SortDirection> = new EventEmitter();

  currentDirection = SortDirection.None;

  constructor(private cdr: ChangeDetectorRef) {}

  onSortChangeWrapper = () => {
    this.currentDirection = getNextDirection(this.currentDirection);
    this.onSortChange.emit(this.currentDirection)
  };

  isDirectionNone = () => this.currentDirection === SortDirection.None;
  isDirectionAsc = () => this.currentDirection === SortDirection.Ascending;
  isDirectionDsc = () => this.currentDirection === SortDirection.Descending;

  reset = () => {
    this.currentDirection = SortDirection.None;
    this.cdr.detectChanges();
  };
}
