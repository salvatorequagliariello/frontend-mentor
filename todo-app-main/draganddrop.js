const list = document.getElementsByClassName("todo-list")[0];
const listElement = document.getElementsByClassName("todo-container");

for (const item of listElement) {
    item.addEventListener("dragleave", (e) => {
        e.preventDefault();
    })
}