// declare variables
let todoList = [];
let todoForm = document.getElementById("todo-form");
let todoInput = document.getElementById("todo-input");
let todoButton = document.getElementById("todo-button");
let todoListElement = document.getElementById("todo-list");
let doneListElement = document.getElementById("done-list");
let clearAllBtn = document.getElementById("clear-all");
let clearAllContainer = document.getElementById("clear-all-container");
const container = document.querySelector(".container");



// add content in todo list
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoText = todoInput.value.trim();
    if (todoText) {
        todoList.push({ text: todoText, done: false });
        renderTodoList();
        renderDoneList();
        todoInput.value = '';
        increaseDivHeight();
    }
})



// Add event listener for clear all button
clearAllBtn.addEventListener('click', () => {
    todoList = [];
    renderTodoList();
    renderDoneList();
    // reset container height
    container.style.height = 'auto';
})



// render to-do list
function renderTodoList() {
    todoListElement.innerHTML = '';
    // creat li tag
    todoList.forEach((todo, index) => {
        const todoElement = document.createElement("li");
        todoElement.textContent = todo.text.toUpperCase();
        // delete content
        todoElement.addEventListener('dblclick', () => {
            removeTask(index);
        });
        todoElement.addEventListener('click', () => {
            markAsDone(index);
        });
        // add li
        todoListElement.appendChild(todoElement);
    });
}



// render done list
function renderDoneList() {
    doneListElement.innerHTML = '';
    // creat li tag
    todoList.forEach((todo, index) => {
        if (todo.done) {
            const todoElement = document.createElement("li");
            todoElement.textContent = `~ ${todo.text.toUpperCase()} ~`;
            // add li
            doneListElement.appendChild(todoElement);
        }
    });
}



// done task
function markAsDone(index) {
    todoList[index].done = true;
    renderTodoList();
    renderDoneList();
    increaseDivHeight();
}



// remove task
function removeTask(index) {
    todoList.splice(index, 1);
    renderTodoList();
    renderDoneList();
}



// increase container height
function increaseDivHeight() {
    const currentHeight = container.offsetHeight;
    container.style.height = `${currentHeight + 60}px`;
}
