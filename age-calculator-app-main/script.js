document.getElementById("dateForm").addEventListener("submit", e => {
    e.preventDefault();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    const age = today - birthDate;
    const monthsFromAge = age / 2629800000;
    const dayConditions = day >= 1 && day <= 31;
    const monthConditions = month >= 1 && month <= 12;
    const yearConditions = year >= 1930 && year <= 2023;

    if (day > daysInMonth(month, year)) {
        const errorMessage = document.createTextNode("Must be a valid date");
        const paragraph = document.createElement("p");
        paragraph.classList.add("error-message", "date");
        paragraph.setAttribute("id", "error-message__date");
        paragraph.appendChild(errorMessage);
        document.getElementById("card-form__inputs-container").appendChild(paragraph);
        document.getElementById("formButton").disabled = true;
    } else if (dayConditions && monthConditions && yearConditions) {
        document.getElementById("error-message__date").remove();
        document.getElementById("formButton").disabled = false;
    }

    const years = Math.floor(monthsFromAge / 12);
    const months = Math.floor(monthsFromAge % 12);
    const days = Math.floor((((monthsFromAge / 12) / 12 * 31) + (years / 4) ) / 24);

    document.getElementById("years-result").innerText = Math.floor(years);
    document.getElementById("months-result").innerText = Math.floor(months);
    document.getElementById("days-result").innerText = Math.floor(days);
})

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

day.addEventListener("blur", e => {
    if (day.value == "" || day.value == NaN || day.value == "") { 
        const errorMessage = document.createTextNode("This field is required");
        const paragraph = document.createElement("p");
        paragraph.classList.add("error-message", "day");
        paragraph.setAttribute("id", "error-message__day");
        paragraph.appendChild(errorMessage);
        document.getElementById("day-container").appendChild(paragraph);
        document.getElementById("formButton").disabled = true;
    } else if ((day.value <= 0 || day.value > 31) && day.value !== NaN) {
        const errorMessage = document.createTextNode("Must be a valid day");
        const paragraph = document.createElement("p");
        paragraph.classList.add("error-message", "day");
        paragraph.setAttribute("id", "error-message__day");
        paragraph.appendChild(errorMessage);
        document.getElementById("day-container").appendChild(paragraph);
        document.getElementById("formButton").disabled = true;
    } else {
        document.getElementById("error-message__day").remove();
        document.getElementById("formButton").disabled = false;
    }
});

month.addEventListener("blur", e => {
    if (month.value == "" || month.value == NaN || month.value == "") {
        const errorMessage = document.createTextNode("This field is required");
        const paragraph = document.createElement("p");
        paragraph.classList.add("error-message", "month");
        paragraph.setAttribute("id", "error-message__month");
        paragraph.appendChild(errorMessage);
        document.getElementById("month-container").appendChild(paragraph);
        document.getElementById("formButton").disabled = true;
    } else if ((day.value <= 0 || day.value > 12) && day.value !== NaN) {
        const errorMessage = document.createTextNode("Must be a valid month");
        const paragraph = document.createElement("p");
        paragraph.classList.add("error-message", "month");
        paragraph.setAttribute("id", "error-message__month");
        paragraph.appendChild(errorMessage);
        document.getElementById("month-container").appendChild(paragraph);
        document.getElementById("formButton").disabled = true;
    } else {
        document.getElementById("error-message__month").remove();
        document.getElementById("formButton").disabled = false;
    }
});

year.addEventListener("blur", e => {
    if (year.value == "" || year.value == NaN || year.value == "") {    
        const errorMessage = document.createTextNode("This field is required");
        const paragraph = document.createElement("p");
        paragraph.classList.add("error-message", "year");
        paragraph.setAttribute("id", "error-message__year");
        paragraph.appendChild(errorMessage);
        document.getElementById("year-container").appendChild(paragraph);
        document.getElementById("formButton").disabled = true;
    } else if (year.value <= 1930 || year.value > 2023) {
        const errorMessage = document.createTextNode("Must be a valid year");
        const paragraph = document.createElement("p");
        paragraph.classList.add("error-message", "year");
        paragraph.setAttribute("id", "error-message__year");
        paragraph.appendChild(errorMessage);
        document.getElementById("year-container").appendChild(paragraph);
        document.getElementById("formButton").disabled = true;
    } else {
        document.getElementById("error-message__year").remove();
        document.getElementById("formButton").disabled = false;
    }
});

function daysInMonth(m, y){
    return m===2?y&3||!(y%25)&&y&15?28:29:30+(m+(m>>3)&1);
};

