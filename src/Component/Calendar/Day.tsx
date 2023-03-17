import React, {useEffect, useState} from "react";
import * as CS from 'Styles/Calendar/CalendarStyle'
import CalendarHeaderProps from 'Props/Props'

const CalendarDay = ({ year, month, day }: CalendarHeaderProps) => {
    // const [data, setData] = useState({ year : 0,  month : 0 })

    // const getDate = () => {
    //     let today = new Date();
    //     setData({ year : today.getFullYear(), month : today.getMonth() + 1 })   
    // }

    // useEffect(() => {
    //     getDate()
    // }, [])
    const [dayArray, setDayArray] = useState([])

    const getDays = (year, month) => new Date(year, month, 0).getDate()
    useEffect(() => {
        // ????? 도대체 왜
        const days = getDays(year, month)
        setDayArray(Array.apply(days, new Array(days)))
        let array = Array.apply(days, new Array(days))
        console.log(array)
    }, [])




    return(
        <section style={{ display : "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}>
            {dayArray.map((item, index) => (
                <div>
                    <p>{index+1}</p>
                </div>
            ))}
        </section>
    )
}

export default CalendarDay