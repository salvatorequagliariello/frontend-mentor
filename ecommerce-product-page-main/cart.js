const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const cartCounterDiv = document.getElementById("cartCounter");
const addCart = document.getElementById("addCart");
const cartIcon = document.getElementById("cartIcon");
const cartContainer = document.getElementsByClassName("cart-container")[0];

let buyCounter = 0;
let cartCounter = 0;

cartIcon.addEventListener("click", () => {
    if (cartContainer.classList.contains("cart-open")) {
        cartContainer.classList.remove("cart-open");
    } else {
        cartContainer.classList.add("cart-open");
    };
})

addCart.addEventListener("click", () => {
    if (cartCounter >= 1) {
        buyCounter = cartContainer;
        document.getElementsByClassName("cart-empty")[0].style.display = "none";
        document.getElementsByClassName("cart-full")[0].style.display = "block";
    } else {
        document.getElementsByClassName("cart-full")[0].style.display = "none";
        document.getElementsByClassName("cart-empty")[0].style.display = "flex";
    }
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