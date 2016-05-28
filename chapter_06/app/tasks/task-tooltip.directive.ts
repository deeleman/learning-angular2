import { Task } from '../shared/shared';
import { Input, Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[task]'
})
export default class TaskTooltipDirective {
  private defaultTooltipText: string;
  @Input() task: Task;
  @Input() taskTooltip: any;

  @HostListener('mouseover')
  onMouseOver() {
    if(!this.defaultTooltipText && this.taskTooltip) {
      this.defaultTooltipText = this.taskTooltip.innerText;
    }
    this.taskTooltip.innerText = this.task.name;
  }

  @HostListener('mouseout')
  onMouseOut() {
    if(this.taskTooltip) {
      this.taskTooltip.innerText = this.defaultTooltipText;
    }
  }
}
