import React, {useState, useEffect, useLayoutEffect} from "react";
import CalendarHeader from 'Component/Calendar/Header'
import CalendarDay from 'Component/Calendar/Day'
import * as CS from 'Styles/Calendar/CalendarStyle'




const Calendar = () => {

    const [data, setData] = useState({ year : 0,  month : 0, day : 0 })

    const getDate = () => {
        let today = new Date();
        setData({ year : today.getFullYear(), month : today.getMonth() + 1, day : today.getDate() })   
    }

    // useEffect(() => {
    //     getDate()
    // }, [])
    useLayoutEffect(() => {


        getDate()
    }, [])


    return(
        <CS.parentStyle>
            
            <CS.contentStyle>
                <CalendarHeader year={data.year} month={data.month}/>
                <CalendarDay year={data.year} month={data.month} day={data.day}/>
            </CS.contentStyle>

        </CS.parentStyle>
    )
}
export default Calendar