import React from "react";
import './Form.css';

function Form({ children }) {
    return (
        <div className="Form">
            {children}
        </div>
    )
}

export default Form;