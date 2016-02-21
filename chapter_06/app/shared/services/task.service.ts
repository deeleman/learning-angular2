import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { TaskModel } from '../shared';

@Injectable()
export default class TaskService {
  tasks: Observable<Array<TaskModel>>;
  public taskStore: Array<TaskModel> = [];
  private tasksObserver: any;

  constructor(public http: Http) {
    this.tasks = new Observable(observer => this.tasksObserver = observer);
    this.loadTasks();
  }

  loadTasks(): void {
    this.http.get('/app/shared/data/raw-tasks.json')
      .map(response => response.json())
      .map(stream => stream.map(res => new TaskModel(res.name, res.deadline, res.timeRequired)))
      .subscribe(
      tasks => {
        this.taskStore = tasks;
        this.tasksObserver.next(this.taskStore);
      },
      error => console.log(error)
      );
  }

  addTask(task: TaskModel): void {
    this.taskStore.push(task);
    this.tasksObserver.next(this.taskStore);
  }
}
