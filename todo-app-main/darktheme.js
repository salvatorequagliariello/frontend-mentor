const themeButton = document.querySelector(".theme-switch");
const inputContainer = document.querySelector(".input-container");
const backgroundTop = document.querySelector(".background-top");
const todoDivs = document.getElementsByClassName("todo-container");
const todoFoot = document.querySelector(".todo-footer");
const filterContainer = document.querySelectorAll(".app-filter-container");
const desktopFooter = document.querySelector(".desktop-footer");
const checks = document.querySelectorAll(".check");

let darkTheme = false;

themeButton.addEventListener("click", () => {
    darkTheme = !darkTheme;

    if (!darkTheme) {
        document.body.style.backgroundColor = "#181823";
        backgroundTop.classList.add("dark-mode-background-top");
        themeButton.classList.add("dark-mode-switch");
        inputContainer.classList.add("dark-mode-input-container");
        inputTodo.classList.add("dark-mode-input-todo");
        
        for (const item of todoDivs) {
            item.classList.add("dark-mode-todo-container");
        }
        
        todoFoot.classList.add("dark-mode-todo-footer");

        for (const filter of filterContainer) {
            filter.classList.add("dark-mode-filters");
        }

        desktopFooter.classList.add("dark-theme-desktop-footer");

        for (const check of checks) {
            check.classList.add("dark-mode-check");
        }

    } else {
        document.body.style.backgroundColor = "#F6F6F8";
        backgroundTop.classList.remove("dark-mode-background-top");
        themeButton.classList.remove("dark-mode-switch");
        inputContainer.classList.remove("dark-mode-input-container");
        inputTodo.classList.remove("dark-mode-input-todo");
        
        for (const item of todoDivs) {
            item.classList.remove("dark-mode-todo-container");
        }
        
        todoFoot.classList.remove("dark-mode-todo-footer");
        
        for (const filter of filterContainer) {
            filter.classList.remove("dark-mode-filters");
        }
        
        desktopFooter.classList.remove("dark-theme-desktop-footer");
    }
})