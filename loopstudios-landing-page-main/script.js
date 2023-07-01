
 const header = document.getElementById("header");

 window.addEventListener("scroll", () => {

     if (window.scrollY > 120 && window.innerWidth > 800) {
         header.style.backgroundColor = "black";
         header.style.paddingTop = "1.5rem";
     } else if (window.scrollY < 120 && window.innerWidth > 800) {
         header.style.backgroundColor = "transparent";
         header.style.paddingTop = "4rem";
     } else {
        return;
     }
})