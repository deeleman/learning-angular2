import { Pipe } from 'angular2/core';
import IQueueable from '../models/IQueueable';

@Pipe({
    name: 'queued',
    pure: false
})
export default class QueuedPipe {
    transform(queueableItems: IQueueable[], args?: any[]): IQueueable[] {
        return queueableItems.filter((queueableItem: IQueueable) => queueableItem.queued === args[0]);
    }
}
