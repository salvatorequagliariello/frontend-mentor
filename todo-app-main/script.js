const inputTodo = document.getElementById("inputTodo");
const addButton = document.getElementById("addButton");
const allButton = document.getElementById("allButton");
const activeButton = document.getElementById("activeButton");
const doneButton = document.getElementById("doneButton");

const todoAllList = document.getElementsByClassName("todo-list")[0];
const todoCountDiv = document.getElementById("todo-count");

const todoAllArray = [];
const todoCompletedArray = [];

const buttonsInList = todoAllList.querySelectorAll(".add-button");
let todoDivsCounter = 0;

// ADD TODO TO ALL LIST AND ARRAY
const createTodo = (text) => {
    if (text == "" || text.length <= 0) return;

    const todoContainer = document.getElementsByClassName("todo-container")[0].cloneNode(true);
    const todoText = todoContainer.querySelector(".todo-text");
    todoText.innerText = text;

    const closeButton = todoContainer.querySelector(".todo-close");
    closeButton.setAttribute("id", `close-${todoDivsCounter}`);

    const checkButton = todoContainer.querySelector(".add-button");
    checkButton.setAttribute("id", `check-${todoDivsCounter}`);

    
    closeButton.addEventListener("click", () => {
        const parent = todoAllArray.findIndex(x => closeButton.id.includes(x.number));
        
        todoAllArray.splice(todoAllArray[parent], 1);
        closeButton.parentElement.remove();
        todoCountDiv.innerText = todoCompletedArray > 0 ? todoAllArray.length - todoCompletedArray.length : todoAllArray.length;
    })

    checkButton.addEventListener("click", () => {
        const parent = todoAllArray.findIndex(x => checkButton.id.includes(x.number));
        todoAllArray[parent].completed = !todoAllArray[parent].completed;
        const checkmark = todoAllArray[parent].element.getElementsByClassName("checkmark")[0];

        if (todoAllArray[parent].completed) {
            checkmark.classList.add("done-light");
            todoText.classList.add("crossed-text");
        } else {
            checkmark.classList.remove("done-light");
            todoText.classList.remove("crossed-text");
        }
    })
    
    todoAllArray.push({
        completed: false,
        element: todoContainer,
        todoText: text,
        number: todoDivsCounter,
    });

    for (const todo of todoAllArray) {
        todoAllList.appendChild(todo.element);
    }

    todoCountDiv.innerText = todoCompletedArray > 0 ? todoAllArray.length - todoCompletedArray.length : todoAllArray.length;
    todoDivsCounter += 1;
};


addButton.addEventListener("click",() => {
    createTodo(inputTodo.value);
    inputTodo.value = "";
})

allButton.addEventListener("click", () => {
    for (const todo of todoAllArray) {
        todoAllList.appendChild(todo.element);
    }

    allButton.classList.add("selected-filter-light");
    activeButton.classList.remove("selected-filter-light");
    doneButton.classList.remove("selected-filter-light");
})

activeButton.addEventListener("click", () => {
    const activeTodos = todoAllArray.filter(x => x.completed === false)

    while (todoAllList.hasChildNodes()) {
        todoAllList.removeChild(todoAllList.firstChild);
    }

    for (const todo of activeTodos) {
        todoAllList.appendChild(todo.element);
    }

    activeButton.classList.add("selected-filter-light");
    allButton.classList.remove("selected-filter-light");
    doneButton.classList.remove("selected-filter-light");
})

doneButton.addEventListener("click", () => {
    const activeTodos = todoAllArray.filter(x => x.completed === true)

    while (todoAllList.hasChildNodes()) {
        todoAllList.removeChild(todoAllList.firstChild);
    }

    for (const todo of activeTodos) {
        todoAllList.appendChild(todo.element);
    }

    doneButton.classList.add("selected-filter-light");
    activeButton.classList.remove("selected-filter-light");
    allButton.classList.remove("selected-filter-light");
})