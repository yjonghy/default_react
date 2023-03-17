import styled, { css } from "styled-components";

export const flexLayout = (direction?, gap?, align?, justify?) => css`
  display: flex;
  flex-direction: ${ direction ? direction : "row"};
  gap: ${ gap ? gap : "0px"};
  align-items: ${ align ? align : "center" };
  justify-content: ${ justify ? justify : "center" };
`

export const parentStyle = styled.div`
    display : flex; 
    align-items : center; 
    justify-content : center;
    width : 100vw;
    height : 100vh;
`

export const contentStyle = styled.div`
    padding : 10px 20px; 
    border : 1px solid #EBEBEB;
    border-radius : 8px;
    min-width : 768px;
    min-heigth : 520px;
`