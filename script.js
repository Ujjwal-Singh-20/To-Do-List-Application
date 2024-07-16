function saveTodos() {
    const todos = [];
    document.querySelectorAll('#todo-list li').forEach(li => {
        todos.push({
            text: li.childNodes[0].textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (!todos) return;

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        if (todo.completed) {
            li.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            this.parentElement.remove();
            saveTodos();
        };
        li.appendChild(deleteButton);

        document.getElementById('todo-list').appendChild(li);
    });
}

document.getElementById('todo-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
        saveTodos();
    }
});

function addTodo() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText === '') return;

    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        this.parentElement.remove();
        saveTodos();
    };
    li.appendChild(deleteButton);

    document.getElementById('todo-list').appendChild(li);
    document.getElementById('new-todo').value = '';

    saveTodos();
}

loadTodos();
