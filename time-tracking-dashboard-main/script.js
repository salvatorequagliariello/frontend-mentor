import data from './data.json' assert { type: 'json' };

const day = document.getElementById("dailyButton");
const week = document.getElementById("weeklyButton");
const month = document.getElementById("monthlyButton");

function changeTimes(timelapse) {
    for (const category of data) {
        const categoryDiv = document.getElementById(`${category.title.toLowerCase()}Card`)
        const current = categoryDiv.querySelector("span.current");
        const previous = categoryDiv.querySelector("span.previous");
        const time = categoryDiv.querySelector(".time");

        if (timelapse == "daily") {
            time.innerHTML = "Day";
        } else if (timelapse == "weekly") {
            time.innerHTML = "Week";
        } else { 
            time.innerHTML = "Monthly";
        };

        current.innerHTML = category.timeframes[timelapse]["current"];
        previous.innerHTML = category.timeframes[timelapse].previous;
    };
};

day.addEventListener("click", e => {
    changeTimes("daily");
    
    day.style.color = "white";
    day.style.opacity = "1";

    week.style.color = "var(--neutral-color-blue-200)";
    week.style.opacity = "0.6";

    month.style.color = "var(--neutral-color-blue-200)";
    month.style.opacity = "0.6";
});

week.addEventListener("click", e => {
    changeTimes("weekly");

    day.style.color = "var(--neutral-color-blue-200)";
    day.style.opacity = "0.6";

    week.style.color = "white";
    week.style.opacity = "1";

    month.style.color = "var(--neutral-color-blue-200)";
    month.style.opacity = "0.6";
});

month.addEventListener("click", e => {
    changeTimes("monthly");

    day.style.color = "var(--neutral-color-blue-200)";
    day.style.opacity = "0.6";

    week.style.color = "var(--neutral-color-blue-200)";
    week.style.opacity = "0.6";

    month.style.color = "white";
    month.style.opacity = "1";
});

changeTimes("weekly");
day.style.color = "var(--neutral-color-blue-200)";
day.style.opacity = "0.6";

week.style.color = "white";
week.style.opacity = "1";

month.style.color = "var(--neutral-color-blue-200)";
month.style.opacity = "0.6";