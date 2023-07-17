const inputTodo = document.getElementById("inputTodo");
const addButton = document.getElementById("addButton");

const allButton = document.querySelectorAll("#allButton");
const activeButton = document.querySelectorAll("#activeButton");
const doneButton = document.querySelectorAll("#doneButton");

const todoAllList = document.getElementsByClassName("todo-list")[0];
const todoCountDiv = document.querySelectorAll("#todo-count");

const todoAllArray = [];
const todoCompletedArray = [];
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
         //aggii
         for (const count of todoCountDiv) {
             count.innerText = todoCompletedArray > 0 ? todoAllArray.length - todoCompletedArray.length : todoAllArray.length;
        }
    })

    checkButton.addEventListener("click", () => {
        const parent = todoAllArray.findIndex(x => checkButton.id.includes(x.number));
        todoAllArray[parent].completed = !todoAllArray[parent].completed;
        const checkmark = todoAllArray[parent].element.getElementsByClassName("checkmark")[0];
        
        if (todoAllArray[parent].completed) {
            checkmark.classList.add("done-light");
            todoText.classList.add("crossed-text");
            checkmark.querySelector(".check").style.display = "inline";
            todoCompletedArray.push(todoAllArray[parent]);
        } else {
            checkmark.classList.remove("done-light");
            todoText.classList.remove("crossed-text");
            checkmark.querySelector(".check").style.display = "none";
            todoCompletedArray.splice(todoCompletedArray.indexOf(todoAllArray[parent]), 1);
        }
         //aggii
         for (const count of todoCountDiv) {
            count.innerText = todoCompletedArray > 0 ? todoAllArray.length - todoCompletedArray.length : todoAllArray.length;
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

    for (const count of todoCountDiv) {
        count.innerText = todoCompletedArray > 0 ? todoAllArray.length - todoCompletedArray.length : todoAllArray.length;
   }
    todoDivsCounter += 1;
};


addButton.addEventListener("click",() => {
    createTodo(inputTodo.value);
    inputTodo.value = "";
})

for (const albtn of allButton) {
    albtn.addEventListener("click", () => {
        for (const todo of todoAllArray) {
            todoAllList.appendChild(todo.element);
        }
        
        allButton.forEach(btn => btn.classList.add("selected-filter-light"));
        activeButton.forEach(btn => btn.classList.remove("selected-filter-light"));
        doneButton.forEach(btn => btn.classList.remove("selected-filter-light"));
        
        for (const count of todoCountDiv) {
            count.innerText = todoAllArray.length;
        }
    })
}

for (const actBtn of activeButton) {
    actBtn.addEventListener("click", () => {
        const activeTodos = todoAllArray.filter(x => x.completed === false)
        
        while (todoAllList.hasChildNodes()) {
            todoAllList.removeChild(todoAllList.firstChild);
        }
        
        for (const todo of activeTodos) {
            todoAllList.appendChild(todo.element);
        }
        
        activeButton.forEach(btn => btn.classList.add("selected-filter-light"));
        allButton.forEach(btn => btn.classList.remove("selected-filter-light"));
        doneButton.forEach(btn => btn.classList.remove("selected-filter-light"));
        
        for (const count of todoCountDiv) {
            count.innerText = todoAllArray.length - todoCompletedArray.length;
        };
    })
}

for (const dnBtn of doneButton) {
    dnBtn.addEventListener("click", () => {
        const activeTodos = todoAllArray.filter(x => x.completed === true)
        
        while (todoAllList.hasChildNodes()) {
            todoAllList.removeChild(todoAllList.firstChild);
        }
        
        for (const todo of activeTodos) {
            todoAllList.appendChild(todo.element);
        }
        
        doneButton.forEach(btn => btn.classList.add("selected-filter-light"));
        activeButton.forEach(btn => btn.classList.remove("selected-filter-light"));
        allButton.forEach(btn => btn.classList.remove("selected-filter-light"));
        
        
        for (const count of todoCountDiv) {
            count.innerText = todoCompletedArray.length;
        }
    })
}
    

new Sortable(todoAllList, {
    animation: 150,
    ghostClass: 'blue-background-class'
});

for (const albtn of allButton) {
    albtn.classList.add("selected-filter-light");
}
for (const actBtn of activeButton) {
    actBtn.classList.remove("selected-filter-light");
}
for (const dnBtn of doneButton) {
    dnBtn.classList.remove("selected-filter-light");
}