import Task from './task.js';

export default class Status {
  constructor() {
    this.task = new Task();
  }

  updateStatus = (index, completed) => {
    if (completed) {
      this.task.tasks[index].completed = false;
      this.task.updateTask();
    } else {
      this.task.tasks[index].completed = true;
      this.task.updateTask();
    }
    return this.task.tasks[index].completed;
  };
}

// export default updateStatus;