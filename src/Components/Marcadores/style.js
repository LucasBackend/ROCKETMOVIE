import styled from "styled-components";

export const Container = styled.div`
width:fit-content;
height:5.6rem;
padding:1.6rem;
border: ${({isActivate})=> isActivate ? 'dashed 1px grey': 'none'};
background-color: ${({theme,isActivate})=>!isActivate?theme.COLORS.FONT_GREY_WHITE:'transparent'};
border-radius:1rem;
display:flex;
align-items:center;
gap:1rem;


> input{
  width:resize;
  background-color:transparent;
  border:none;
  outline:none;
  font-size:1.6rem;
  font-family:'Roboto',sans-serif;
  font-weight:400;
  color: ${({theme})=>theme.COLORS.FONT_WHITE};
}

>button {
  background-color:transparent;
  border:none;
}

svg {
  fill:${({theme})=>theme.COLORS.FONT_PINK};
}




`