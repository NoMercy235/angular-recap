import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ArrowDirection } from "./arrowType";

@Component({
  selector: 'arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Arrow {
  @Input() direction: ArrowDirection;
  @Input() disabled?: boolean = false;

  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  isDirectionUp = () => this.direction === ArrowDirection.Up;
  isDirectionRight = () => this.direction === ArrowDirection.Right;
  isDirectionDown = () => this.direction === ArrowDirection.Down;
  isDirectionLeft = () => this.direction === ArrowDirection.Left;

  onClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.stopPropagation();
    }
  };
}
