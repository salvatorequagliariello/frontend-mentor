async function getAdvice() { 
    let response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const {id, advice} = data.slip; 

    if (advice.length > 50) {
        response = await fetch("https://api.adviceslip.com/advice");
    };

    if (document.getElementById("advice-text").innerHTML !== "") {
        document.getElementById("advice-text").innerHTML = "";
    }
    
    if (document.getElementById("advice-id").innerHTML !== "") {
        document.getElementById("advice-id").innerHTML = "";
    }

    const adviceIdParagraph = document.getElementById("advice-id");
    const idText = document.createTextNode(id);
    adviceIdParagraph.appendChild(idText);

    const adviceTextParagraph = document.getElementById("advice-text");
    const adviceText = document.createTextNode(`"${advice}"`);
    adviceTextParagraph.appendChild(adviceText);

}

getAdvice();

