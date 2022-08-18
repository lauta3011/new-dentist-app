import React, { useEffect, useState } from "react";
import CalendarDay from '../CalendarDay/CalendarDay';

import './Days.css';

function Days(props) {
    const [iterableMonth, setIterableMonth] = useState();

    useEffect(() => {
        const handler = () => {
            const date = props.date;
            const firstCalendarDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;

            let month = [];
            var aux = 1;

            for (var i = 0; i < 35; i++) {
                if (i < firstCalendarDay) {
                    month.push(0);
                } else {
                    if (aux <= props.monthLength) {
                        month.push(aux);
                        aux = aux + 1;
                    } else {
                        month.push(0);
                    }
                }
            }
            setIterableMonth(month);
        }

        handler()
    }, [props.month])

    return (
        <div className="Days">
            {iterableMonth && iterableMonth.map((day, i) => {
                return <CalendarDay key={i} index={i} handleClick={(date) => props.handleClick(date)} day={day} month={props.month} year={props.year} lastDay={props.lastDay} />
            })
            }
        </div>
    )
}

export default Days;