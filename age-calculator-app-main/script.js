
document.getElementById("dateForm").addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    const age = today - birthDate;
    const monthsFromAge = age / 2629800000;

    const years = Math.floor(monthsFromAge / 12);
    const months = Math.floor(monthsFromAge % 12);
    const days = Math.floor((((monthsFromAge / 12) / 12 * 31) + (years / 4) ) / 24);

    document.getElementById("years-result").innerText = Math.floor(years);
    document.getElementById("months-result").innerText = Math.floor(months);
    document.getElementById("days-result").innerText = Math.floor(days);
}

// 9523.697238865741