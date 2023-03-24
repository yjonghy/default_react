import React, {useEffect, useState} from "react";
import * as CS from 'Styles/Calendar/CalendarStyle'
import CalendarHeaderProps from 'Props/Props'

const dayOfWeekString = ["일","월","화","수","목","금","토"]
const EnDayOfWeekString = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

const gridStyle = {
    display : "grid", 
    gridTemplateColumns : "repeat(7, minmax(0, 1fr))"
}

//캘린더 prop참고
const CalendarDay = ({ year, month, day, dayOfWeek }: CalendarHeaderProps) => {



    const [dayArray, setDayArray] = useState([])
    const getDays = (year, month) => new Date(year, month, 0).getDate()
    const getFirstDayOfWeek = (year, month) => new Date(`${year}-${month}-1`).getDay()

    useEffect(() => {
        if (year !== 0 && month !== 0) {
            const days = getDays(year, month) //현재 날짜가 속한 달의 총 일수 가져오기
            let array = Array(days).fill(0).map((v, i) => i+1) //1 ~ days까지 숫자로 채운 배열 생성
            let unArray = Array(getFirstDayOfWeek(year, month)).fill(0) // 첫번째날의 요일 전날만큼 0으로 채운 배열
            array.unshift.apply(array, unArray) // 0으로 채운 배열 앞단에 밀어넣기
            setDayArray(array)
        }
    }, [year, month, day, dayOfWeek])
    const addBlackDay = (item: number) => item !== 0 && (<p>{item}</p>)

    return(
        <section>
            <article style={gridStyle}>
                { dayOfWeekString.map((item, index)=> ( <p>{item}</p> )) }
            </article>
            <article style={gridStyle}>
                {dayArray.map((item, index) => (
                    <div>
                        {addBlackDay(item)}
                    </div>
                ))}
            </article>
        </section>)
}

export default CalendarDay