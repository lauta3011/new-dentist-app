import React from "react";

import NewAppointment from "../components/NewAppointment/NewAppointment";

import './ScreenStyle.css';

function AddAppointment() {
    return (
        <div className="AddAppointment Screen">
            <NewAppointment />
        </div>
    )
}

export default AddAppointment;