import React, {useEffect, useState} from "react";
import * as CS from 'Styles/Calendar/CalendarStyle'
import CalendarHeaderProps from 'Props/Props'

const CalendarHeader = ({ year, month }: CalendarHeaderProps) => {
    // const [data, setData] = useState({ year : 0,  month : 0 })

    // const getDate = () => {
    //     let today = new Date();
    //     setData({ year : today.getFullYear(), month : today.getMonth() + 1 })   
    // }

    // useEffect(() => {
    //     getDate()
    // }, [])
    const partenrStyle = { display : "flex", justifyContent : "center", gap : "10px" }


    return(
        <section style={partenrStyle}>
            <button>
                왼쪽 버튼 
            </button>
            <p>{year}년 {month}월</p>
            <button>
                오른쪽 버튼
            </button>
        </section>
    )
}

export default CalendarHeader