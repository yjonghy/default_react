import styled from 'styled-components';
import * as CS from 'Styles/Common/CommonStyle'

export const headerParent = styled.div<{ scroll : boolean }>`
  position: ${props => props.scroll ? `fixed` : `relative`};
  width: 100%;
  z-index: 1000;
  transform: translateZ(0px);
  ${CS.flexLayout("column")} 
  //flex-direction: column;
  //align-items: center;
`

export const headerContent = styled.div`
  position: relative;
  width: 1160px;
  height: 80px;
  ${CS.flexLayout(undefined, undefined, undefined, "space-between")}
`

export const headerLogo = styled.img`
  width: 130px;
  height: 32px;
  cursor: pointer;
`
export const headerRightMenu = styled.div`
  ${CS.flexLayout()}
  height: 100%;
`
export const mainMenu = styled.div`
  height: 100%;
  ${CS.flexLayout(undefined, "21px", undefined, undefined)}
`
export const feedMenu = styled.div`
  ${CS.flexLayout(undefined, "2px", undefined, undefined)}
  
`
export const menuNew = styled.div`

`
