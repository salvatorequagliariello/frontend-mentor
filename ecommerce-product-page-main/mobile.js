const hamburgerIcon = document.getElementsByClassName("hamburger-menu-icon")[0];
const closeHam = document.getElementById("closeHam");
const menu = document.getElementsByClassName("mobile-nav-view")[0];

hamburgerIcon.addEventListener("click", () => {
    menu.style.display = "block";
});

closeHam.addEventListener("click", () => {
    menu.style.display = "none";
})