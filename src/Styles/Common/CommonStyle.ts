import styled from "styled-components";

interface flexParameter = {
    direction : string, gap : number, align : string, justify : string
}
export const flexLayout = styled.div<{ direction : string, gap : number, align : string, justify : string }>`
  display: flex;
  flex-direction: ${ props => props.direction ? props.direction : "row"};
  gap: ${ props => props.gap ? props.gap + "px" : "0px"};
  align-items: ${ props => props.align ? props.align : "center" };
  justify-content: ${ props => props.justify ? props.justify : "center" };
`