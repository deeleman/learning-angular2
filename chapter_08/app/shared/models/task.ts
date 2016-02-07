import IQueueableModel from './iqueueable';

export default class TaskModel implements IQueueableModel {
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
