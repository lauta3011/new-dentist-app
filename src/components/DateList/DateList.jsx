import React from "react";

import DateItem from "../DateItem/DateItem";
import { testDateItem } from "../../utils/constants"

import './DateList.css';

function DateList(props) {
    return (
        <div className="DateList">
            <DateItem handleOpenDetail={(date) => props.handleOpenDetail(date)} details={testDateItem} />
            <DateItem handleOpenDetail={(date) => props.handleOpenDetail(date)} details={testDateItem} />
            <DateItem handleOpenDetail={(date) => props.handleOpenDetail(date)} details={testDateItem} />
            <DateItem handleOpenDetail={(date) => props.handleOpenDetail(date)} details={testDateItem} />
        </div>
    )
}

export default DateList;