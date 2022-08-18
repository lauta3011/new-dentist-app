import React, { useState, useEffect } from "react";
import './CalendarDay.css';

function CalendarDay(props) {
    const [isToday, setIsToday] = useState('');

    useEffect(() => {
        const handler = () => {
            const date = new Date()
            props.day === date.getDate() ? setIsToday('today') : setIsToday('');
        }
        handler()
    }, [props.day])

    const handleClick = () => {
        const date = new Date(props.year, props.month, props.day);
        props.handleClick(date);
    }

    return (
        <div className="CalendarDay">
            {props.day !== 0 && <div onClick={() => handleClick()} className={"day " + isToday}>
                <span>{props.day}</span>
            </div>}

            {props.day === 0 && <div className="day emptyDay"></div>}
        </div>
    )
}

export default CalendarDay;