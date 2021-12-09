import React from "react";
import Day from './Day';
import {useState} from "react";

const Month = () => {
    //between [] the first one is the variable having the state, the next one is the variable we use to change the state
    const [month, setMonth] = useState('January');
    let months = [
        {id:1, name:"January"},
        {id:2, name: "February"},
        {id:3, name: "March"},
        {id:4, name: "April"},
        {id:5, name: "May"},
        {id:6, name: "June"},
        {id:7, name: "July"},
        {id:8, name: "August"},
        {id:9, name: "September"},
        {id:10, name: "October"},
        {id:11, name: "November"},
        {id:12, name: "December"}

    ]
    //easier to write only one option element and map trough the months-Array
    var monthArray = months.map(month =>{
        return (
            <option key={month.id} value={month.name}>{month.name}</option>
        )
    })
    //when month is selected, this fetches first day of selected month from component "Day" and inserts the string
    //setMonth sets the selected month to be seen on the select element and runs the day query
    return (
        <div>
            <label>Month</label>
            <select className="custom-select" onChange={({target}) => setMonth(target.value)}>{monthArray}</select>
            <Day month={month}/>
        </div>
    )

}
export default Month;