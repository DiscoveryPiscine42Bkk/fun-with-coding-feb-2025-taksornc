document.addEventListener("DOMContentLoaded", function () {
    loadTodos();

     document.getElementById('new').addEventListener('click', () => {
    const textxas = prompt('Enter a new TO DO:');
    if (textxas) {
      textxas.push(textxas); 
      addTaskToDOM(textxas);
      saveTasks(textxas); 
        }
    });
});

function addTodo(textxas) {
    let todo = document.createElement("div");
    todo.className = "todo";
    todo.textContent = textxas;
    todo.addEventListener("click", function () {
        if (confirm("Do you want to delete this TODO?")) {
            todo.remove();
            saveTodos();
        }
    });
    let list = document.getElementById("ft_list");
    list.prepend(todo);
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
}

function loadTodos() {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [name, value] = cookie.split("=");
        if (name === "todos") {
            let todos = JSON.parse(value);
            todos.forEach(todo => addTodo(todo));
        }
    }
}

