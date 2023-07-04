const screenText = document.getElementById("screenText");
const buttons = document.getElementsByClassName("calculator-button");
const dummy = document.getElementById("screenTextDummy");

const operations = [];

for (const button of buttons) {
    button.addEventListener("click", () => {
        dummy.remove();
        if (button.value == "del") {
            screenText.innerHTML = screenText.innerHTML.substring(0, screenText.innerHTML.length - 1);
        } else if (!isNaN(button.value)) {
            screenText.innerHTML = screenText.innerHTML + button.value;
        } else if (button.value == ".") {
            screenText.innerHTML = screenText.innerHTML + button.value;
        } else if (button.value == "+" || button.value == "-" || button.value == "/" || button.value == "*" ) {
            operations.push(screenText.innerHTML);
            operations.push(button.value);
            console.log(operations.join(" "));
            screenText.innerHTML = "";
        } else if (button.value == "=") {
            if (/^[0-9]*$/.test(operations[operations.length - 1])) {
                const result = getResult(operations);
                screenText.innerHTML = result;
                operations.length = 0;
                operations.push(result);
            } else {
                operations.push(screenText.innerHTML);
                const result = getResult(operations);
                screenText.innerHTML = result;
                operations.length = 0;
            }   
        } else {        
            screenText.innerHTML = "";
            operations.length = 0;
            console.log(operations);
        }
    })
};

function getResult(operations) {
    let tempNum;

    
    for (let i = operations.length - 1; i => 0; i--) {
        if (!isNaN(operations[i])) {
            tempNum = +operations[i];
        } else if (operations[i] === "+") {
            tempNum = tempNum + +operations[i - 1];
            i--;
        } else if (operations[i] === "-") {
            tempNum = +operations[i - 1] - tempNum;
            i--;
        } else if (operations[i] === "/") {
            tempNum = +operations[i - 1] / tempNum;
            i--;
        } else if (operations[i] === "*") {
            tempNum = +operations[i - 1] * tempNum;
            i--;
        } else {

            if (!Number.isInteger(tempNum)) {
                tempNum = +tempNum.toFixed(4);
            };
            return tempNum;
        }
    }
    
    if (!Number.isInteger(tempNum)) {
        tempNum = +tempNum.toFixed(4);
    };
    return tempNum;
} 