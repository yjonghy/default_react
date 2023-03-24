import React, { useState, useEffect, useLayoutEffect } from "react";
import CalendarHeader from 'Component/Calendar/Header'
import CalendarDay from 'Component/Calendar/Day'
import * as CS from 'Styles/Calendar/CalendarStyle'




const Calendar = () => {

    //getFullYear 연도
    //getMonth 달
    //getDate 일
    //getDay 요일
    const [data, setData] = useState({ year: 0, month: 0, day: 0, dayOfWeek: 0 })

    const getDate = () => {
        let today = new Date();
        setData({
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            day: today.getDate(),
            dayOfWeek: today.getDay()
        })
    }

    useEffect(() => {
        getDate()
    }, [])

    const prevMonth = () => {
        // if (data.month === 1) {
        //     setData({
        //         year: data.year - 1,
        //         month: 12,
        //         day: data.day,
        //         dayOfWeek: data.dayOfWeek
        //     })
        // } else {

        //     setData({
        //         year: data.year,
        //         month: data.month - 1,
        //         day: data.day,
        //         dayOfWeek: data.dayOfWeek
        //     })
        // }
        const monthCheck = data.month === 1
        setData({
            year: monthCheck ? data.year - 1 : data.year,
            month: monthCheck ? 12 : data.month - 1,
            day: data.day,
            dayOfWeek: data.dayOfWeek
        })
    }


    const nextMonth = () => {
        // if (data.month === 12) {
        //     setData({
        //         year: data.year + 1,
        //         month: 1,
        //         day: data.day,
        //         dayOfWeek: data.dayOfWeek
        //     })
        // } else {
        //     setData({
        //         year: data.year,
        //         month: data.month + 1,
        //         day: data.day,
        //         dayOfWeek: data.dayOfWeek
        //     })
        // }
        const monthCheck = data.month === 12
        setData({
            year: monthCheck ? data.year + 1 : data.year,
            month: monthCheck ? 1 : data.month + 1,
            day: data.day,
            dayOfWeek: data.dayOfWeek
        })

    }


    return (
        <CS.parentStyle>
            <CS.contentStyle>
                <CalendarHeader
                    nextMonth={nextMonth}
                    prevMonth={prevMonth}
                    year={data.year} month={data.month} />
                <CalendarDay
                    year={data.year} month={data.month} day={data.day} dayOfWeek={data.dayOfWeek} />
            </CS.contentStyle>

        </CS.parentStyle>
    )
}
export default Calendar