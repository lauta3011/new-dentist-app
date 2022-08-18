import React, { useEffect, useState } from "react";
import "./Input.css";

function Input(props) {
    const [text, setText] = useState();

    useEffect(() => {
        props.handleChange(text);
    }, [text]);

    let retInput;

    switch (props.type) {
        case "text":
            retInput = <input onChange={(e) => setText(e.target.value)} id={props.for} type="text" />;
            break;
        case "textarea":
            retInput = <textarea onChange={(e) => setText(e.target.value)} id={props.for} rows="3" />;
            break;
        case "num":
            retInput = <input onChange={(e) => setText(e.target.value)} id={props.for} type="phone" />;
            break;
    }

    return (
        <div className="Input">
            <label htmlFor={props.for}>{props.text}</label>
            {retInput}
        </div>
    )
}

export default Input;