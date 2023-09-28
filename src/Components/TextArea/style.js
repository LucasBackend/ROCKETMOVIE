import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 27.4rem;
background-color: ${({theme})=>theme.COLORS.FONT_GREY_WHITE};
border-radius:1rem;
outline:none;

:hover{
    outline: 1px solid ${({theme})=>theme.COLORS.FONT_PLACEHOLDER};
  }


>textarea{
  width:100%;
  height:auto;
  background-color:transparent;
  outline:none;
  border:none;
  resize:none;
  font-size:1.6rem;
  color: ${({theme})=>theme.COLORS.FONT_WHITE};
  font-family:'Roboto',sans-serif;
  padding:1.6rem;
}

`