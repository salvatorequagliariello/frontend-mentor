import data from './data.json' assert { type: 'json' };

const day = document.getElementById("dailyButton");
const week = document.getElementById("weeklyButton");
const month = document.getElementById("monthlyButton");


function changeTimes(time) {
    const categories = ["work", "play", "study", "exercise", "social", "self-care"];
    let timelapse;
    
    if (time === "day") {
        timelapse = "daily";
    } else if (time === "week") {
        timelapse = "weekly";
    } else {
        timelapse = "monthly";
    };

    for (const category of categories) {
        const categoryDiv = document.getElementById(`${category}Card`)
        const current = categoryDiv.querySelector("span.current");
        const previous = categoryDiv.querySelector("span.previous");
        const time = categoryDiv.querySelector(".time");
        time.innerHTML = time.toString(); 

            for (const title of data) {
                const cat = title.timeframes[timelapse];
                current.innerHTML = cat.current;
                previous.innerHTML = cat.previous;
            }
            console.log(current.innerHTML)
    };
};


day.addEventListener("click", e => {
    changeTimes("day");
});

week.addEventListener("click", e => {
    changeTimes("week");
});

month.addEventListener("click", e => {
    changeTimes("month");
});


changeTimes();