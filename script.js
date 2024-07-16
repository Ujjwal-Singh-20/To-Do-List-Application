function addTodo() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText === '') return;

    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        this.parentElement.remove();
    };
    li.appendChild(deleteButton);

    document.getElementById('todo-list').appendChild(li);
    document.getElementById('new-todo').value = '';
}


document.getElementById('todo-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});
