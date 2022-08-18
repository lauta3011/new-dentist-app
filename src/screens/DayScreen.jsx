import React, { useEffect, useState } from "react";

import DateContainer from '../components/DateContainer/DateContainer';
import DateList from '../components/DateList/DateList';
import DateDetail from '../components/DateDetail/DateDetail';

function DayScreen() {
    const [dates, setDates] = useState();
    const [dateDetail, setDateDetail] = useState();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetch = () => {
            console.log('coso')
        }

        fetch()
    }, [])

    const openDetail = (date) => {
        setDateDetail(date);
        setModalOpen(true);
    }

    const closeDetail = () => {
        setModalOpen(false);
        setDateDetail(null)
    }
    return (
        <div className="Day Screen">
            {modalOpen && <DateDetail date={dateDetail} handleClose={() => closeDetail()} />}
            <DateContainer />
            <DateList handleOpenDetail={(date) => openDetail(date)} list={dates} />
        </div>
    )
}

export default DayScreen;