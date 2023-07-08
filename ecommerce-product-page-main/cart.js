const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const cartCounterDiv = document.getElementById("cartCounter");
const addCart = document.getElementById("addCart");
let buyCounter = 0;
let cartCounter = 0;

addCart.addEventListener("click", () => {
    buyCounter = cartCounter;
})

plus.addEventListener("click", () => {
    cartCounter += 1;
    cartCounterDiv.innerText = cartCounter;
})

minus.addEventListener("click", () => {

    if (cartCounter >= 1) {
        cartCounter -= 1;
    } else {
        cartCounter = 0;
    }
    cartCounterDiv.innerText = cartCounter;
})