import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { SortDirection } from "../types";
import { getNextDirection } from "../utils";

@Component({
  selector: 't-sort-icon',
  templateUrl: 't-sort-icon.component.html',
  styleUrls: ['./t-sort-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TSortIcon {
  @Output() onSortChange: EventEmitter<SortDirection> = new EventEmitter();

  currentDirection = SortDirection.None;

  onSortChangeWrapper = () => {
    this.currentDirection = getNextDirection(this.currentDirection);
    this.onSortChange.emit(this.currentDirection)
  };

  isDirectionNone = () => this.currentDirection === SortDirection.None;
  isDirectionAsc = () => this.currentDirection === SortDirection.Ascending;
  isDirectionDsc = () => this.currentDirection === SortDirection.Descending;
}
