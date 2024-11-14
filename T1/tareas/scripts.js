// Selecciona elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Función para agregar una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();

    // Verifica que el campo de entrada no esté vacío
    if (taskText === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }

    // Crea un nuevo elemento de lista
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Botón para marcar la tarea como completada
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completar';
    completeButton.addEventListener('click', function() {
        listItem.classList.toggle('completed'); // Cambia el estilo de la tarea
    });

    // Botón para eliminar la tarea
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem); // Elimina la tarea de la lista
    });

    // Añade los botones al elemento de lista
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    // Añade la tarea a la lista de tareas
    taskList.appendChild(listItem);

    // Limpia el campo de entrada
    taskInput.value = '';
}

// Añade un evento al botón de agregar tarea
addTaskButton.addEventListener('click', addTask);

// Permite añadir tareas presionando la tecla "Enter"
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
