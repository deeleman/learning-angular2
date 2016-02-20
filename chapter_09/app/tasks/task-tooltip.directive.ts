import { TaskModel } from '../shared';
import { Input, Directive, HostListener } from 'angular2/core';

@Directive({
  selector: '[task]'
})
export default class TaskTooltipDirective {
  private defaultTooltipText: string;
  @Input() task: TaskModel;
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
