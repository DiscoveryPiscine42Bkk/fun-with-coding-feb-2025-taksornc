document.addEventListener('DOMContentLoaded', function() {
    loadTodos();
    document.getElementById('new').addEventListener('click', function() {
        const todo = prompt('Enter a new TODO:');
        if (todo && todo.trim()) {
            addTodo(todo);
            saveTodos();
        }
    });
});

function addTodo(text) {
    const div = document.createElement('div');
    div.textContent = text;
    
    // Add click handler for removing todo
    div.addEventListener('click', function() {
        if (confirm('Do you want to remove this TODO?')) {
            div.remove();
            saveTodos();
        }
    });

    // Add to top of list
    const list = document.getElementById('ft_list');
    list.insertBefore(div, list.firstChild);
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll('#ft_list div').forEach(function(div) {
        todos.push(div.textContent);
    });
    document.cookie = 'todos=' + JSON.stringify(todos) + ';path=/;max-age=31536000';
}

function loadTodos() {
    const match = document.cookie.match('todos=([^;]+)');
    if (match) {
        try {
            const todos = JSON.parse(match[1]);
            todos.forEach(function(todo) {
                addTodo(todo);
            });
        } catch (e) {
            console.error('Error loading todos:', e);
        }
    }
}
