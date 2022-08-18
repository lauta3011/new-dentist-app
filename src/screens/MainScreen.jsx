import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Calendar from '../components/Calendar/Calendar';

import './ScreenStyle.css';

function MainScreen() {
    const [date, setDate] = useState(new Date());
    const [month, setMonth] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setMonth(date.getMonth());
    }, [date])

    const changeDate = (action) => {
        let date = new Date();

        if (action === "+") {
            date = new Date(date.getFullYear(), month + 1);
        } else if (action === "-") {
            date = new Date(date.getFullYear(), month - 1);
        }
        setDate(date);
    }

    const openDayDetail = (date) => {
        navigate('./day', { state: { year: date.getFullYear(), month: date.getMonth(), day: date.getDate(), weekDay: date.getDay() - 1 } });
    }

    return (
        <div className="Main Screen">
            <Calendar date={date} handleChangeDate={(action) => changeDate(action)} handleClick={(date) => openDayDetail(date)} />
        </div>
    )
}

export default MainScreen;