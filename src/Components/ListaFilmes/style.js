import styled from "styled-components";

export const Container = styled.button`
width:99.6%;
height:22rem;
background-color: ${({theme})=>theme.COLORS.BACKGROUND_LIST};
border-radius:2rem;
padding:1.6rem;
display:flex;
flex-direction:column;
text-align:left;

>h1 {
  font-size:2.4rem;
  color: ${({theme})=>theme.COLORS.FONT_WHITE};
  font-family:"Roboto Slab", sans-serif;
  font-weight:700;
  margin-bottom:0.8rem;
}

>span{
  color: ${({theme})=>theme.COLORS.FONT_GREY};
  height:5.2rem;
  margin-bottom:1.5rem;

  
}

> .TAGS{
    display:flex;
    align-items:center;
    gap:1rem;
    color:white;
    
    >span{
      background-color:${({theme})=>theme.COLORS.BACKGROUND_CLEAN};
      padding:5px 1.6rem;
      width:fit-content;
      border-radius:1rem;
    }
  
  }


>.rating svg{
  fill:${({theme})=>theme.COLORS.FONT_PINK};
  margin-bottom:1.5rem
  
}
`