import React from "react";
import "./DateItem.css";

function DateItem(props) {
    return (
        <div className="DateItem" onClick={() => props.handleOpenDetail(props.details)}>
            <div className="patient info">
                <span>{props.details.name}</span>
                <span>{props.details.shortDesc}</span>
            </div>

            <div className="notes info">
                <span>{props.details.notes}</span>
            </div>

            <div className="time info">
                <h3>{props.details.time}</h3>
            </div>
        </div>
    )
}

export default DateItem;