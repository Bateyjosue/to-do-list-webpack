class Task {
  constructor(description) {
    this.tasks = JSON.parse(localStorage.getItem('toDoList')) || [];
    this.index = null;
    this.completed = false;
    this.description = description;
  }

  addTask = (description) => {
    this.tasks.push({
      index: this.tasks.length,
      description,
      completed: false,
    });
    return description;
  };

  removerTask = (index) => {
    this.tasks.splice(index, 1);
    this.tasks = this.tasks.map((task, index) => ({ ...task, index }));
    return this.tasks[index];
  };

  editTask = (index, value) => {
    if (index === -1) return;
    this.tasks[index].description = value;
    this.updateTask();
  };

removeCompleted = () => {
const isCompleted = this.tasks.filter((task) => task.completed === true);
isCompleted.forEach((task) =>{
this.removerTask(task.index);
this.updateTask();
});
return isCompleted;
};


  updateTask = () => localStorage.setItem('toDoList', JSON.stringify(this.tasks));
}

export default Task;
