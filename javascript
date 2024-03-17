document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addTaskBtn').addEventListener('click', addTask);
  document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});

function addTask() {
  var input = document.getElementById('taskInput');
  var task = input.value.trim();
  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  var ul = document.getElementById('taskList');
  var li = document.createElement('li');
  li.textContent = task;
  ul.appendChild(li);

  input.value = '';
}
