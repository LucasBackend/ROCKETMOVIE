import styled from "styled-components";

export const Container = styled.button`
width:100%;
height:4.8rem;
color: ${({theme,isDelete})=>isDelete?theme.COLORS.FONT_PINK:theme.COLORS.FULL_BLACK};
background-color:${({theme,isDelete})=>isDelete?"#000000":theme.COLORS.FONT_PINK};
border:none;
border-radius:5px;
`