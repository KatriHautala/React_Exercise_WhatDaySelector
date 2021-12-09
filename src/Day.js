import React from "react";

const Day = ({month}) => {
    //array of weekdays
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //gets first day of selected month
    const day = new Date (`2021 ${month} 1`).getDay();
    //day returns only a number, so this changes the number equal to the day inside the weekday-Array
    let date = weekday[day];
    
    return(
        <div>
            Month {month}/2021 starts {date}
        </div>
    )
}
export default Day; 