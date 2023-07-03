const button = document.getElementById("sliderButton");
const tanya = document.getElementById("articleContainerTanya");
const john = document.getElementById("articleContainerJohn");
const prev = document.getElementById("prevButton");
const next = document.getElementById("nextButton");
const prevOne = document.getElementById("prevOneButton");
const nextOne = document.getElementById("nextOneButton");


next.addEventListener("click", () => {
    changeSlide();
})

prev.addEventListener("click", () => {
    changeSlide();
})

nextOne.addEventListener("click", () => {
    changeSlide();
})

prevOne.addEventListener("click", () => {
    changeSlide();
})


function changeSlide() {
    if (tanya.classList.contains("active")) {
        tanya.classList.remove("active");
        john.classList.add("active");
    } else {
        john.classList.remove("active");
        tanya.classList.add("active");
    }
}