import React from "react";

import { monthsNames } from '../../utils/constants';

import './CalendarHeader.css';

function CalendarHeader(props) {
    const pastMonth = () => {
        props.handleClick('-')
    }

    const nextMonth = () => {
        props.handleClick('+')
    }

    return (
        <div className="CalendarHeader">
            <img onClick={() => pastMonth()} className={"left"} src={"arrow.png"} />
            <h3>{monthsNames[props.monthName]}</h3>
            <img onClick={() => nextMonth()} src={"arrow.png"} />
        </div>
    )
}

export default CalendarHeader;