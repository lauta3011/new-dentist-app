import React from "react";
import { useLocation } from 'react-router-dom';

import { weekDays } from '../../utils/constants';

import './DateContainer.css';

function DateContainer() {
    const location = useLocation();

    return (
        <div className="DateContainer">
            <h3>{weekDays[location.state.weekDay]}</h3>
        </div>
    )
}

export default DateContainer;