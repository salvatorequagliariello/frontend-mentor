
const imgButtons = document.getElementsByClassName("image-button");
const mainImg = document.getElementById("mainImg");
const lightbox = document.getElementsByClassName("lightbox")[0];

const lightMainImg = document.getElementById("lightMainImg");
const carouselDivs = document.getElementsByClassName("lightbox-img-container");
const prev = document.getElementById("lightPrev");
const next = document.getElementById("lightNext");
let preselected = -1;

mainImg.addEventListener("click", () => {
    lightbox.classList.add("flex");
})

for (const button of imgButtons) {
    button.addEventListener("click", () => {
        const otherButtons = Array.from(imgButtons);
        const index = otherButtons.indexOf(button);
        preselected = index;
        console.log("in", index, "pre", preselected);
        otherButtons.splice(index, 1);

        getSelected(index);

        mainImg.src = `/images/image-product-${index + 1}.jpg`
        otherButtons.forEach(btn => btn.classList.remove("active-image"));
        button.classList.add("active-image");
    })
}

for (const div of carouselDivs) {
    div.addEventListener("click", () => {
        const allDivs = Array.from(carouselDivs);
        const index = allDivs.indexOf(div);
        preselected = index;
        console.log("in", index, "pre", preselected);
        allDivs.splice(index, 1);

        lightMainImg.src = `/images/image-product-${index + 1}.jpg`;
        div.classList.add("orange-border");
        div.querySelector(".overlay").classList.add("lightbox-white");

        for (const btn of allDivs) {
            btn.classList.remove("orange-border");
            btn.querySelector(".overlay").classList.remove("lightbox-white");
        };
    })
};

next.addEventListener("click", () => {

    if (preselected == -1) preselected = 0;

    if (preselected == 3) {
        preselected = 0;
    } else if (preselected >= 0 && preselected <= 4) {
        preselected += 1;
    }

    lightMainImg.src = `/images/image-product-${preselected + 1}.jpg`;

    const allDivs = Array.from(carouselDivs);

    allDivs[preselected].classList.add("orange-border");
    allDivs[preselected].querySelector(".overlay").classList.add("lightbox-white");
    allDivs.splice(preselected, 1);

    for (const btn of allDivs) {
        btn.classList.remove("orange-border");
        btn.querySelector(".overlay").classList.remove("lightbox-white");
    };
});

prev.addEventListener("click", () => {

    if (preselected == -1) preselected = 0;

    if (preselected === 0) {
        preselected = 3;
    } else {
        preselected -= 1;
    }

    lightMainImg.src = `/images/image-product-${preselected + 1}.jpg`;

    const allDivs = Array.from(carouselDivs);

    allDivs[preselected].classList.add("orange-border");
    allDivs[preselected].querySelector(".overlay").classList.add("lightbox-white");
    allDivs.splice(preselected, 1);

    for (const btn of allDivs) {
        btn.classList.remove("orange-border");
        btn.querySelector(".overlay").classList.remove("lightbox-white");
    };
});



function getSelected(index = -1) {
    if (index === -1) index = 0;

    const allDivs = Array.from(carouselDivs);
    lightMainImg.src = `/images/image-product-${index + 1}.jpg`;

    allDivs[index].classList.add("orange-border");
    allDivs[index].querySelector(".overlay").classList.add("lightbox-white");
    
    allDivs.splice(index, 1);
    for (const btn of allDivs) {
        btn.classList.remove("orange-border");
        btn.querySelector(".overlay").classList.remove("lightbox-white");
    }
};

getSelected();

