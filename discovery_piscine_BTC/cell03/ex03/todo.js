document.addEventListener("DOMContentLoaded", function () {
    loadTodos();

    document.getElementById("new").addEventListener("click", function () {
        if (document.querySelectorAll(".todo").length === 0) {
            let text = prompt("Enter a new TODO:");
            if (text) {
                addTodo(text);
                saveTodos();
            }
        } else {
            alert("You can only add one TODO at a time.");
        }
    });
});

function addTodo(text) {
    let todo = document.createElement("div");
    todo.className = "todo";
    todo.textContent = text;
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
            if (todos.length > 0) {
                addTodo(todos[0]);
            }
        }
    }
}

