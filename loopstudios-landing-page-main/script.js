
const header = document.getElementById("header");
const hamburgerButton = document.getElementById("hamburgerButton");
const hamburgerMenu = document.getElementById("hambuergerMenu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120 && window.innerWidth > 800) {
         header.style.backgroundColor = "black";
         header.style.paddingTop = "1.5rem";
    } else if (window.scrollY < 120 && window.innerWidth > 800) {
         header.style.backgroundColor = "transparent";
         header.style.paddingTop = "4rem";
    } else if (window.scrollY > 70 && window.innerWidth < 800) {
        header.style.backgroundColor = "black";
        header.style.paddingTop = "1rem";
        header.style.paddingBottom = "1rem";
    } else if (window.scrollY < 70 && window.innerWidth < 800) {
        header.style.backgroundColor = "transparent";
        header.style.padding = "2.5rem 1.5rem";
    } 
});

hamburgerButton.addEventListener("click", () => {
    if (hamburgerButton.classList.contains("hamburger-icon-closed")) {
        hamburgerButton.classList.remove("hamburger-icon-closed");
        hamburgerButton.classList.add("hamburger-icon-open");
        
        hamburgerMenu.style.display = "block";
    } else  {
        hamburgerButton.classList.add("hamburger-icon-closed");
        hamburgerButton.classList.remove("hamburger-icon-open");
        
        hamburgerMenu.style.display = "none";
    }
})