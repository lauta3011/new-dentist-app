import React, { useEffect, useState } from "react";

import { weekDays } from '../../utils/constants';

import "./DateDetail.css";

function DateDetail(props) {
    const [day, setDay] = useState();

    useEffect(() => {
        const date = new Date(props.date.day);
        console.log(date)
    })
    return (
        <>
            <div className="background-modal" onClick={() => props.handleClose()}></div>

            <div className="DateDetail">
                <div className="header">
                    <h2>{props.date.name}</h2>
                    <div>
                        <h2>{props.date.day}</h2>
                        <h2>{props.date.time}</h2>
                    </div>
                </div>
                <div className="info">
                    <h3>notas:</h3>
                    <p>otra cosa cosa larga larguisima con duracion de tres parrafos quizas cuatro</p>
                </div>
            </div>
        </>
    )
}

export default DateDetail;