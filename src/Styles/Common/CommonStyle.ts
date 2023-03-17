import styled, { css } from "styled-components";

export const flexLayout = (direction?, gap?, align?, justify?) => css`
  display: flex;
  flex-direction: ${ direction ? direction : "row"};
  gap: ${ gap ? gap : "0px"};
  align-items: ${ align ? align : "center" };
  justify-content: ${ justify ? justify : "center" };
`
// export const commonText = (fw? , fs?, lh?, color?) => css`
//   font-weight: ${fw ? fw : 500};
//   font-size: ${fs ? fs : "12px"};
//   line-height: ${lh ? lh : "14px"};
//   color: ${color ? color :  `rgb(27, 29, 31)`};
// `



const blue000 = "#CAE2FC"
const blue005 = "#75ADFF"
const blue010= "#609BFF"
const blue020= "#3C82FA"
const blue025= "#246FF8"
const blue030= "#246FF8"
const blue040= "#195BFA"
const blue050= "#0046F0"
const blue060= "#0F3DDE"
const blue070= "#0038C1"
const blue= "#0056FF"
const gold= "#C19F63"
const green= "#5CC566"
const red= "#FF4B3E"
const red005= "#FFF1F0"
const red010= "#FFE6E4"
const orange= "#FE7849"
const yellow= "#FFC428"
const white= "#FFFFFF"
const gray005= "#FAFBFB"
const gray010= "#F5F7F8"
const gray015= "#EFF3F5"
const gray020= "#E7EAEE"
const gray025= "#DFE2E7"
const gray030= "#C9CDD2"
const gray035= "#AEB3B8"
const gray040= "#9EA4AA"
const gray050= "#72787F"
const gray055= "#535960"
const gray060= "#454B50"
const gray065= "#35383C"
const gray070= "#26282B"
const gray080= "#1B1D1F"
const gray085= "#141618"
const gray090= "#131415"
const gray095= "#050505"
const black= "#000"
const toggleDefault= "rgba(120, 120, 128, 0.16)"
const transparent= "transparent"