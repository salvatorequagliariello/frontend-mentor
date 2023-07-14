const inputTodo = document.getElementById("inputTodo");
const addButton = document.getElementById("addButton");

const todoAllList = document.getElementsByClassName("todo-list")[0];
const todoCountDiv = document.getElementById("todo-count");

const todoAllArray = [];
const todoCompletedArray = [];

const buttonsInList = todoAllList.querySelectorAll(".add-button");

// ADD TODO TO ALL LIST AND ARRAY
const createTodo = (text) => {
    const todoContainer = document.getElementsByClassName("todo-container")[0].cloneNode(true);
    const todoText = todoContainer.querySelector(".todo-text");
    todoText.innerText = text;
    const closeButton = todoContainer.querySelector(".todo-close");
    const checkButton = todoContainer.querySelector(".add-button");

    closeButton.addEventListener("click", () => {
        const index = todoAllArray.indexOf(todoAllArray)
    })

    todoAllArray.push({
        completed: false,
        element: todoContainer,
        todoText: text, 
    });

    for (const todo of todoAllArray) {
        todoAllList.appendChild(todo.element);
    }

    todoCountDiv.innerText = todoCompletedArray > 0 ? todoAllArray.length - todoCompletedArray.length : todoAllArray.length;

};



addButton.addEventListener("click",() => {
    createTodo(inputTodo.value);
})