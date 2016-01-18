import { Pipe } from 'angular2/core';
import IQueueable from '../models/IQueueable';

@Pipe({
    name: 'queued',
    pure: false
})
export default class Queued {
    transform(queueableItems: IQueueable[], args?: any[]): IQueueable[] {
        return queueableItems.filter((x: IQueueable) => x.queued === args[0]);
    }
}
