function getDayCount(isCurrent) {
    let selectedMonth = document.querySelector("#monthSelect").value;
    if (isCurrent) {
        selectedMonth = new Date().getMonth() + 1;
        selectedMonth = selectedMonth.toString();
    }
    let outPut = document.querySelector("#out");
    let currentYear = new Date().getFullYear();
    let selectedDate = new Date(currentYear, selectedMonth - 1, 1);
    
    let dayCount;
    switch(selectedMonth) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            dayCount = 31;
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            dayCount = 30;
            break;
        case "2":
            if ((currentYear % 4 === 0 && currentYear % 100 !== 0)) {
                dayCount = 29;
            } else {
                dayCount = 28;
            }
            break;
        default:
            dayCount = -1;
            break;

    }

    outPut.innerHTML = `${selectedDate.toLocaleString('en', { month: 'long' })}, ${dayCount}`;
  }