import IQueueable from './IQueueable';

export default class TaskModel implements IQueueable {
    name: string;
    deadline: Date;
    queued: boolean;
    pomodorosRequired: number;

    constructor(name?: string, deadline?: any, timeRequired: number = 25, queued: boolean = false) {
        this.name = name;
        this.deadline = new Date(deadline);
        this.queued = queued;
        this.pomodorosRequired = Math.floor(timeRequired / 25);
    }
}
