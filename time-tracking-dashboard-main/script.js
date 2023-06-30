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
});

week.addEventListener("click", e => {
    changeTimes("weekly");
});

month.addEventListener("click", e => {
    changeTimes("monthly");
});