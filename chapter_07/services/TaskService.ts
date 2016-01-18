import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/models';

@Injectable()
export default class TaskService {
    tasks: Observable<Array<Task>>;
    public taskStore: Array<Task> = [];
    private tasksObserver: any;

    constructor(public http: Http) {
        this.tasks = new Observable(observer => this.tasksObserver = observer);
        this.loadTasks();
    }

    loadTasks(): void {
        this.http.get('/services/tasks.json')
            .map(response => response.json())
            .map(stream => stream.map(x => new Task(x.name, x.deadline, x.timeRequired)))
            .subscribe(
                data => {
                    this.taskStore = data;
                    this.tasksObserver.next(this.taskStore);
                },
                error => console.log(error)
            );
    }

    addTask(task: Task): void {
        this.taskStore.push(task);
        this.tasksObserver.next(this.taskStore);
    }
}
