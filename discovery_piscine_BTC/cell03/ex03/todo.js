function saveToStorage(data) {
    localStorage.setItem('todoData', JSON.stringify(data));
}

function getFromStorage() {
    const data = localStorage.getItem('todoData');
    return data ? JSON.parse(data) : [];
}

function startTodoApp() {
    let todoItems = getFromStorage();
    const todoList = document.getElementById('ft_list');

    function renderTodoItem(content) {
        const element = document.createElement('div');
        element.textContent = content;

        element.onclick = function() {
            if (!confirm('Do you want to remove this TODO?')) {
                return;
            }
            const pos = todoItems.indexOf(content);
            if (pos >= 0) {
                todoItems.splice(pos, 1);
                element.remove();
                saveToStorage(todoItems);
            }
        };

        todoList.insertBefore(element, todoList.firstChild);
    }

    todoItems.forEach(renderTodoItem);

    document.getElementById('new').onclick = function() {
        const content = prompt('Enter a new TODO:');
        if (!content) {
            return;
        }
        todoItems.unshift(content);
        renderTodoItem(content);
        saveToStorage(todoItems);
    };
}

window.onload = startTodoApp;
