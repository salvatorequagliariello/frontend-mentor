async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const {id, advice} = data.slip; 

    const adviceIdParagraph = document.getElementById("advice-id");
    const idText = document.createTextNode(id);
    adviceIdParagraph.appendChild(idText);

    const adviceTextParagraph = document.getElementById("advice-text");
    const adviceText = document.createTextNode(advice);
    adviceIdParagraph.appendChild(adviceText);
}

getAdvice();
