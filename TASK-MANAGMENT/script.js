document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');

    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;
    const taskTime = timeInput.value;

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = `${taskText} - ${taskDate} ${taskTime ? taskTime : ''}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});
