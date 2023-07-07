
const imgButtons = document.getElementsByClassName("image-button");
const mainImg = document.getElementById("mainImg");

for (const button of imgButtons) {
    button.addEventListener("click", () => {
        const otherButtons = Array.from(imgButtons);
        const index = otherButtons.indexOf(button);
        otherButtons.splice(index, 1);

        mainImg.src = `/images/image-product-${index + 1}.jpg`
        otherButtons.forEach(btn => btn.classList.remove("active-image"));
        button.classList.add("active-image");
    })
}