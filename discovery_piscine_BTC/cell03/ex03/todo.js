document.addEventListener('DOMContentLoaded', () => {
  renderTasks(loadTasks());
  document.getElementById('newTask').addEventListener('click', handleNewTask);
});
function loadTasks() {
  let storedTasks = localStorage.getItem('tasks');
  return storedTasks? JSON.parse(storedTasks):;
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(taskText, taskIndex) {
  let taskItem = document.createElement('div');
  taskItem.textContent = taskText;
  taskItem.addEventListener('click', () => {
    if (confirm('ต้องการลบรายการนี้หรือไม่?')) {
      removeTask(taskIndex);
    }
  });
  return taskItem;
}

function renderTasks(tasks) {
  let todoList = document.getElementById('ft_list');
  todoList.innerHTML = ''; // Clear the list before rendering

  tasks.forEach((task, index) => {
    let taskElement = createTaskElement(task, index);
    todoList.prepend(taskElement); // Add new tasks to the top
  });
}

function addTask(taskText) {
  let tasks = loadTasks();
  tasks.unshift(taskText); // Add new tasks to the beginning of the array
  saveTasks(tasks);
  renderTasks(tasks);
}

function removeTask(taskIndex) {
  let tasks = loadTasks();
  tasks.splice(taskIndex, 1);
  saveTasks(tasks);
  renderTasks(tasks);
}

function handleNewTask() {
  let newTask = prompt('เพิ่มรายการ To-Do ใหม่:');
  if (newTask) {
    addTask(newTask);
  }
}
