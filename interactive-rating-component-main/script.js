const form = document.getElementById("myForm");

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log(number);
  document.getElementById("card-content").style.display = "none";
  document.getElementById("card-thanks").style.display = "flex";
})

let number;

function myFunction(givenNumber){
    number = givenNumber;
    let message =  `<p id="message" class="card-thanks__selected">You selected ${number} out of 5</p>`
    document.getElementById("message").innerHTML = message;
};   