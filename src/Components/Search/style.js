import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height: 5.6rem;
background-color:${({theme})=>theme.COLORS.BACKGROUND_CLEAN};
border-radius: 1rem;

> input {
  background-color:transparent;
  border:none;
  width:100%;
  height:100%;
  color: ${({theme})=>theme.COLORS.FONT_WHITE};
  outline: none;
  border-radius: 1rem;
  padding:1.6rem;
  font-family:"Roboto Slab",sans-serif;
  

  :hover{
    outline: 1px solid ${({theme})=>theme.COLORS.FONT_PLACEHOLDER};
  }

  ::placeholder{
    color: ${({theme})=>theme.COLORS.FONT_GREY};
    font-size:1.4rem;
    font-family:"Roboto Slab",sans-serif;
  }
}


`