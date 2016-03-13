import { Queueable } from '../shared';

interface Task extends Queueable {
  name: string;
  deadline: Date;
  pomodorosRequired: number;
}

export default Task;
