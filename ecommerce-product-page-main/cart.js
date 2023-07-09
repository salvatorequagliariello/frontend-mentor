const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const cartCounterDiv = document.getElementById("cartCounter");
const addCart = document.getElementById("addCart");
const cartIcon = document.getElementById("cartIcon");
const cartContainer = document.getElementsByClassName("cart-container")[0];

const itemQuantity = document.getElementById("itemCount");
const itemPrices = document.getElementById("itemPrice");
const cartIconCounter = document.getElementById("cartIconCounter");

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
        itemQuantity.innerText = cartCounter;
        itemPrices.innerText = `$${(125 * cartCounter).toFixed(2)}`;

        document.getElementsByClassName("cart-empty")[0].style.display = "none";
        document.getElementsByClassName("cart-full")[0].style.display = "block";
        cartIconCounter.innerHTML = cartCounter;
        cartIconCounter.style.display = "block";
    } else {
        document.getElementsByClassName("cart-full")[0].style.display = "none";
        document.getElementsByClassName("cart-empty")[0].style.display = "flex";
        cartIconCounter.style.display = "none";
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