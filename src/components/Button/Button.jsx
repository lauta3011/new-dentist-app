import React from "react";
import "./Button.css";

function Button(props) {
    return (
        <div onClick={() => props.handleClick()} className="button">
            <input type="button" value={props.text} />
        </div>
    )
}

export default Button;