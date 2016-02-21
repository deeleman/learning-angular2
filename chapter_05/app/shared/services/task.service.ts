import { TaskModel } from '../shared';

export default class TaskService {
  public taskStore: Array<TaskModel> = [];

  constructor() {
    const tasks = [
      {
        name: "Code an HTML Table",
        deadline: "Mon Jun 23 2015 12:00:00 GMT+0200 (CEST)",
        timeRequired: 25
      }, {
        name: "Sketch a wireframe for the new homepage",
        deadline: "Tue Jun 24 2016 12:00:00 GMT+0200 (CEST)",
        timeRequired: 50
      }, {
        name: "Style table with Bootstrap styles",
        deadline: "Wed Jun 25 2016 12:00:00 GMT+0200 (CEST)",
        timeRequired: 25
      }, {
        name: "Reinforce SEO with custom sitemap.xml",
        deadline: "Wed Jun 26 2016 12:00:00 GMT+0200 (CEST)",
        timeRequired: 75
      }
    ];

    this.taskStore = tasks.map((rawTaskObject: any) => {
      return new TaskModel(
        rawTaskObject.name,
        rawTaskObject.deadline,
        rawTaskObject.timeRequired);
    });
  }

  addTask(task: TaskModel): void {
    this.taskStore.push(task);
  }
}
