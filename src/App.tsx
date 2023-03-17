import React, {Suspense, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as AP from 'AppContext/AppPage'
import Header from "./Component/Head/Header";
const App = () => {

    return (
        <div className="App">

            <Suspense fallback={<div>로딩중 프로그레스바</div>}></Suspense>
            <BrowserRouter>
                {/* <Header /> */}
        
                <Routes>
                    <Route path={'/'} element={ <AP.examplePage /> }/>
                </Routes>
                <Routes>
                    <Route path={'/calender'} element={ <AP.calendarPage/> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;
