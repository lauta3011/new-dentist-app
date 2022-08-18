import React, { useState, useEffect } from "react";

import { weekDays } from '../../utils/constants';

import './Calendar.css';
import Days from '../Days/Days';
import CalendarHeader from '../CalendarHeader/CalendarHeader';

function Calendar(props) {
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [monthLength, setMonthLength] = useState();

    useEffect(() => {
        const handler = () => {
            const date = props.date;

            const length = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
            const month = date.getMonth();
            const year = date.getFullYear();

            setMonthLength(length);
            setYear(year);
            setMonth(month);
        }

        handler();
    }, [props.date])

    const changeMonth = (action) => {
        props.handleChangeDate(action)
    }
    return (
        <div className="Calendar">
            <div className="containerAux"></div>

            <div className="container">
                <CalendarHeader handleClick={(action) => changeMonth(action)} monthName={month} />

                <div className="daysName">
                    {weekDays.map(name =>
                        <div key={name} className="name">
                            <span>{name}</span>
                        </div>)
                    }
                </div>
                <Days date={props.date} month={month} year={year} handleClick={(date) => props.handleClick(date)} monthLength={monthLength} />
            </div>
        </div>
    )
}

export default Calendar;