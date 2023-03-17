import React, {useEffect, useState} from "react";
import * as HS from 'Styles/Head/Header'
import {feedMenu, headerContent, headerLogo, headerRightMenu, mainMenu, menuNew} from "Styles/Head/Header";

const logoImage = "https://s3.hourplace.co.kr/web/images/icon/logo_b.svg"


//header 고정 기준
//document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000
const Header = () => {

    const [scrollState, setScrollState] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", scrollDetected)
        return () => {
            window.removeEventListener("scroll", scrollDetected)
        }
    }, [])
    const scrollDetected = () => {
        //true = fixed, false = relative
        setScrollState(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000)
    }

    const logoImageClick = () => {
        //tracking event and window.href = '/'
        console.log("logoImageClick")
    }


    return(
        <HS.headerParent scroll={scrollState}>
            <HS.headerContent >
                <HS.headerLogo src={logoImage} onClick={() => logoImageClick()}/>

                <HS.headerRightMenu>
                    <HS.mainMenu>
                        <div>모든 카테고리</div>
                        <div>인기장소</div>
                        <HS.feedMenu>
                            <div>장소피드</div>
                            <HS.menuNew>New</HS.menuNew>
                        </HS.feedMenu>
                        <HS.feedMenu>
                            <div>게스트피드</div>
                            <HS.menuNew>New</HS.menuNew>
                        </HS.feedMenu>
                    </HS.mainMenu>



                    <div id="right" style={{ display : "flex"}}>
                        <div id="search" style={{ display : "flex"}}>
                            <div></div>
                            <div></div>
                        </div>
                        <div>구분선</div>
                        <div id="profile" style={{ display : "flex"}}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div id="team_page" style={{ display : "flex"}}>
                            <div id="team_page_button" style={{ display : "flex"}}>
                                <div>팀 페이지</div>
                                <div>new</div>
                            </div>
                        </div>
                    </div>
                </HS.headerRightMenu>

            </HS.headerContent>
        </HS.headerParent>
    )
}
export default Header



