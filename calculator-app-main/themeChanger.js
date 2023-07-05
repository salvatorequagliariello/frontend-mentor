const themeButton = document.getElementById("themeSwitch"); 

const body = document.body;
const header = document.getElementById("calculatorHeader");
const screen = document.getElementById("calculatorScreen");
const textScreen = document.getElementsByClassName("calculator-screen__text");

themeButton.addEventListener("change", () => {
    if (themeButton.value == "2") {
        body.classList.remove("theme3-body");
        body.classList.add("theme2-body");

        header.classList.remove("theme3-header-text");
        header.classList.add("theme2-header-text");

        screen.classList.remove("theme3-screen-bg");
        screen.classList.add("theme2-screen-bg");

        for (const text of textScreen) {
            text.classList.remove("theme3-text-screen");
            text.classList.add("theme2-text-screen");
        };
    } else if (themeButton.value == "3") {
        body.classList.remove("theme2-body");
        body.classList.add("theme3-body");

        header.classList.remove("theme2-header-text");
        header.classList.add("theme3-header-text");

        screen.classList.remove("theme2-screen-bg");
        screen.classList.add("theme3-screen-bg");

        for (const text of textScreen) {
            text.classList.remove("theme2-text-screen");
            text.classList.add("theme3-text-screen");
        };
    } else {
        body.classList.remove("theme3-body");
        body.classList.remove("theme2-body");

        header.classList.remove("theme2-header-text");
        header.classList.remove("theme3-header-text");

        screen.classList.remove("theme3-screen-bg");
        screen.classList.remove("theme2-screen-bg");

        for (const text of textScreen) {
            text.classList.remove("theme3-text-screen");
            text.classList.remove("theme2-text-screen");
        };
    }
})
