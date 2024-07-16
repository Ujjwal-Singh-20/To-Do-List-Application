function addTodo() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText === '') return;

    const li = document.createElement('li');
    li.textContent = todoText;
    document.getElementById('todo-list').appendChild(li);

    document.getElementById('new-todo').value = '';
}

document.getElementById('todo-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});
