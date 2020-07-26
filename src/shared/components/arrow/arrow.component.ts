import { Component, Input } from '@angular/core';
import { ArrowDirection } from "./arrowType";

@Component({
  selector: 'arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})

export class Arrow {
  @Input() direction: ArrowDirection;
  @Input() disabled?: boolean = false;

  isDirectionUp = () => this.direction === ArrowDirection.Up;
  isDirectionRight = () => this.direction === ArrowDirection.Right;
  isDirectionDown = () => this.direction === ArrowDirection.Down;
  isDirectionLeft = () => this.direction === ArrowDirection.Left;
}
