import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height:100vh;
display: grid;
grid-template-rows: 11.6rem auto;
background-color: ${({theme})=>theme.COLORS.BACKGROUND};
grid-template-areas: 
"Header"
"Content";

>.Content{
  grid-area:Content;
  width:100%;
  height:100%;
  
}

>.Content main {
  width: 113.7rem;
  margin: 5rem auto 0;
 
}


>.Content main .Container {
  display:flex;
  justify-content:space-between;
  width:100%;
  margin-bottom:4rem;

  >h1 {
    font-family:"Roboto Slab",sans-serif;
    font-size:3.2rem;
    color:${({theme})=>theme.COLORS.FONT_WHITE};
    font-weight:400;
  }

  >div{
    width: 20.7rem;
  }

  >div a {
    display:flex;
    align-items:center;
    justify-content:center;
    gap:0.5rem;
    background-color:${({theme})=>theme.COLORS.FONT_PINK};
    color: black;
    border-radius:.8rem;
    height:4.8rem;
  }
}


.Content .Lista{
  width:100%;
  height:65rem;
  overflow-y: auto;

  > ul {
      display:flex;
      flex-direction:column;
      gap: 1.5rem;
      
    }

    &::-webkit-scrollbar{
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
    background-color: transparent;
}

  &::-webkit-scrollbar-thumb {
      background-color: ${({theme})=>theme.COLORS.FONT_PINK};
      border-radius: 5px;
  }
  

}


`



