import { Component, EventEmitter, Output } from '@angular/core';

import { SortDirection } from "../utils";

@Component({
  selector: 't-sort-icon',
  templateUrl: 't-sort-icon.component.html'
})

export class TSortIcon {
  @Output() onSortChange: EventEmitter<SortDirection> = new EventEmitter();

  currentDirection = SortDirection.None;

  onSortChangeWrapper = () => {
    this.currentDirection = SortDirection.Ascending;
    this.onSortChange.emit(this.currentDirection)
  };
}
