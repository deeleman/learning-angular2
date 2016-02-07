import { Pipe, PipeTransform } from 'angular2/core';
import IQueueableModel from '../models/iqueueable';

@Pipe({
    name: 'queuedOnly',
    pure: false
})
export default class QueuedOnlyPipe implements PipeTransform {
    transform(queueableItems: IQueueableModel[], args?: any[]): IQueueableModel[] {
        return queueableItems.filter((queueableItem: IQueueableModel) => queueableItem.queued === args[0]);
    }
}
