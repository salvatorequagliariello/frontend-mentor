document.getElementById("dateForm").addEventListener("submit", e => {
    e.preventDefault();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    const age = today - birthDate;
    const monthsFromAge = age / 2629800000;

    if (day > daysInMonth(month, year)) {
        console.log("no valid date")
    };

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
    console.log("non hai messo il giorno")
    } else if ((day.value <= 0 || day.value > 31) && day.value !== NaN) {
        console.log("nu va bene, numero grande")
    } else {
        return;
    }
});
(month.value <= 0 || month.value > 12)
month.addEventListener("blur", e => {
    if (month.value == "" || month.value == NaN || month.value == "") {
        console.log("nu hai messo mese")
    } else if (day.value > daysInMonth(month.value, year.value)) {
        console.log("no valid date")
    } else {
        return
    }
});

year.addEventListener("blur", e => {
    if (year.value == "" || year.value == NaN || year.value == "") {    
    console.log("non hai messo l'anno")
    } else if (year.value <= 1930 || year.value > 2023) {
        console.log("nu va bene, anno grande")
    } else {
        return
    }
});

function daysInMonth(m, y){
    return m===2?y&3||!(y%25)&&y&15?28:29:30+(m+(m>>3)&1);
};
