const now = new Date();
const btn = document.querySelector("#btn");
const text = document.querySelector("#textOutput");

function determineDate() {
    let day = now.getDay();
    let dayName;

    switch(day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    }
    text.innerHTML = dayName + "<br/>also check Console, output from determineDate() function"
    console.log(dayName)
    return dayName
}

btn.addEventListener("click", determineDate)
