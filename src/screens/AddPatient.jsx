import React from "react";

import NewPatient from "../components/NewPatient/NewPatient";

import './ScreenStyle.css';

function AddPatient() {
    return (
        <div className="AddPatient Screen">
            <NewPatient />
        </div>
    )
}

export default AddPatient;