import { Component, Input } from '@angular/core';
import { validateInput } from "../../decorators/validateInput";
import { isBetween } from "../../decorators/isBetween";

@Component({
  selector: 'progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicator {
  @validateInput(isBetween({ min: 50 }))
  @Input() radius: number;

  @validateInput(isBetween({ min: 0, max: 100 }))
  @Input() progress: number;

  @Input() color: string;

  getHeight = () => this.radius * 2;
  getWidth = () => this.radius * 2;
  getRadius = () => this.radius - 4;
  getCircumference = () => this.getRadius() * 2 * Math.PI;
  getVisibleProgress = () => {
    const c = this.getCircumference()
    return c - this.progress / 100 * c;
  };
}
