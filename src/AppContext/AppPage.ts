import React, { lazy } from "react";
//page import
const example = lazy(() => import("Page/MainPage"))
export const examplePage = example

const calendar = lazy(() => import("Page/Calendar"))
export const calendarPage = calendar