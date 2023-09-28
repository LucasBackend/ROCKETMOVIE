import styled from "styled-components";



export const Container =styled.div`
width:100%;
height:5.5rem;
background-color: ${({theme})=>theme.COLORS.BACKGROUND_CLEAN};
border-radius:1rem;
outline:none;
display:flex;
align-items:center;
justify-content:start;



:hover{
    outline: 1px solid ${({theme})=>theme.COLORS.FONT_PLACEHOLDER};
  }

>svg{
  margin-left:1rem;
}

>input {
  width:100%;
  height:100%;
  background-color:transparent;
  border:none;
  outline: none;
  padding:1.6rem;
  font-size:1.6rem;
  color: ${({theme})=>theme.COLORS.FONT_WHITE};
  font-family:'Roboto',sans-serif;
}


`