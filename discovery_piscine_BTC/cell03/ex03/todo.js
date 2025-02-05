window.onload = function() {
  loadTodos();
  document.getElementById('new-button').addEventListener('click', newTodo);
};

function newTodo() {
  let todo = prompt("Enter new TO DO:");
  if (todo!== null && todo.trim()!== "") {
    addTodo(todo);
  }
}

function addTodo(todoText) {
  let todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');
  todoItem.textContent = todoText;
  todoItem.addEventListener('click', removeTodo);

  let todoList = document.getElementById('ft_list');
  todoList.prepend(todoItem); // Add at the top

  saveTodos();
}

function removeTodo(event) {
  if (confirm("Are you sure you want to remove this TO DO?")) {
    event.target.remove();
    saveTodos();
  }
}

function saveTodos() {
  let todoList = document.getElementById('ft_list');
  let todos =;
  todoList.querySelectorAll('.todo-item').forEach(item => {
    todos.push(item.textContent);
  });
  document.cookie = "todos=" + JSON.stringify(todos);
}

function loadTodos() {
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith("todos=")) {
      let todos = JSON.parse(cookie.substring("todos=".length));
      todos.forEach(todo => addTodo(todo));
    }
  }
}
