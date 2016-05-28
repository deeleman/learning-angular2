import { Pipe, PipeTransform } from '@angular/core';
import { Queueable } from '../shared';

@Pipe({
  name: 'pomodoroQueuedOnly',
  pure: false
})
export default class QueuedOnlyPipe implements PipeTransform {
  transform(queueableItems: Queueable[], ...args: any[]): Queueable[] {
    return queueableItems.filter((queueableItem: Queueable) => {
      return queueableItem.queued === args[0]
    });
  }
}
