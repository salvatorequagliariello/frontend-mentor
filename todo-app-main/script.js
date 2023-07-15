const inputTodo = document.getElementById("inputTodo");
const addButton = document.getElementById("addButton");

const todoAllList = document.getElementsByClassName("todo-list")[0];
const todoCountDiv = document.getElementById("todo-count");

const todoAllArray = [];
const todoCompletedArray = [];

const buttonsInList = todoAllList.querySelectorAll(".add-button");
let todoDivsCounter = 0;

// ADD TODO TO ALL LIST AND ARRAY
const createTodo = (text) => {
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
        console.log(todoAllArray);
        
        closeButton.parentElement.remove();
    })

    checkButton.addEventListener("click", () => {
        const parent = todoAllArray.findIndex(x => checkButton.id.includes(x.number));
        todoAllArray[parent].completed = !todoAllArray[parent].completed;
        const checkmark = todoAllArray[parent].element.getElementsByClassName("checkmark")[0];

        console.log(todoAllArray[parent]);
        if (todoAllArray[parent].completed) {
            checkmark.classList.add("done-light");
        } else {
            checkmark.classList.remove("done-light");
        }
        console.log(todoAllArray[parent]);
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
})