const themeButton = document.getElementById("themeSwitch"); 

const body = document.body;
const header = document.getElementById("calculatorHeader");
const screen = document.getElementById("calculatorScreen");
const textScreen = document.getElementsByClassName("calculator-screen__text");
const calculatorKeypad = document.getElementsByClassName("calculator-buttons")[0];
const buttons = document.getElementsByClassName("calculator-button");
const twoButtons = [document.getElementById("buttonDel"), document.getElementById("buttonReset")];
const equal = document.getElementById("buttonEqual");

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

        calculatorKeypad.classList.remove("theme3-keypad-bg");
        calculatorKeypad.classList.add("theme2-keypad-bg");

        for (const button of buttons) {
            button.classList.remove("theme3-btn-color");
            button.classList.add("theme2-btn-color");
        };

        for (const btn of twoButtons) {
            btn.classList.remove("theme3-reset-button");
            btn.classList.add("theme2-reset-button");
        };

        equal.classList.remove("theme3-equal");
        equal.classList.add("theme2-equal");
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

        calculatorKeypad.classList.remove("theme2-keypad-bg");
        calculatorKeypad.classList.add("theme3-keypad-bg");

        for (const button of buttons) {
            button.classList.remove("theme2-btn-color");
            button.classList.add("theme3-btn-color");
        };

        for (const btn of twoButtons) {
            btn.classList.remove("theme2-reset-button");
            btn.classList.add("theme3-reset-button");
        };

        equal.classList.remove("theme2-equal");
        equal.classList.add("theme3-equal");
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

        calculatorKeypad.classList.remove("theme3-keypad-bg");
        calculatorKeypad.classList.remove("theme2-keypad-bg");

        for (const button of buttons) {
            button.classList.remove("theme3-btn-color");
            button.classList.remove("theme2-btn-color");
        };


        for (const btn of twoButtons) {
            btn.classList.remove("theme3-reset-button");
            btn.classList.remove("theme2-reset-button");
        };

        equal.classList.remove("theme3-equal");
        equal.classList.remove("theme2-equal");
    }
})
