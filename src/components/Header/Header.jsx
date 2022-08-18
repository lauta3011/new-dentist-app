import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

function Header() {
    return (
        <div className="Header">
            <div className="section">
                <Link to="/">CALENDARIO</Link>
            </div>

            <div className="section">
                <div className="buttons">
                    <button value="nueva consulta" >
                        <Link to="/new-patient">nuevo paciente</Link>
                    </button>
                </div>

                <div className="buttons">
                    <button value="nuevo paciente" >
                        <Link to="/new-appointment">nueva consulta</Link>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header;