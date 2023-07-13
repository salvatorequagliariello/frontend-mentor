const inputTodo = document.getElementById("inputTodo");
const addButton = document.getElementById("addButton");
const todoList = document.getElementsByClassName("todo-list")[0];
const todoCountDiv = document.getElementById("todo-count");
const todoAllArray = [];
const todoCompletedArray = [];

const createTodo = (text) => {
    const todoContainer = document.getElementsByClassName("todo-container")[0].cloneNode(true);
    const todoText = todoContainer.querySelector(".todo-text");
    todoText.innerText = text;

    todoList.appendChild(todoContainer);
    todoAllArray.push({
        completed: false,
        element: todoContainer
    });

    todoCountDiv.innerText = todoCompletedArray > 0 ? todoAllArray.length - todoCompletedArray.length : todoAllArray.length;
};

addButton.addEventListener("click",() => {
    createTodo(inputTodo.value);

})
