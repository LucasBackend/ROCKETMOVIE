import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100vh;
background-color: ${({theme})=>theme.COLORS.BACKGROUND};
display:grid;
grid-template-rows: 11.6rem auto;
grid-template-areas: 
"Header"
"Content";

`

export const Content = styled.div`
width:100%;
height:100%;
grid-area:Content;


> main {
  width: 113.7rem;
  height:75rem;
  margin: 4rem auto 0;
  overflow-y:auto;

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

  >div:nth-child(2){
    margin-bottom:4rem;
  }

  >.Container_Box{
    display:flex;
    flex-direction:column;
    width:fit-content;
    height:13.5rem;
    gap:2.4rem;
    margin-bottom: 4.8rem;
    
    
    >.voltar{
      width:fit-content;
      
    }

  }

  >.Container_Box .header{
    display:flex;
    align-items:baseline;
    justify-content:center;
    gap:1.9rem;

    >h1 {
      font-size:3rem;
      color:${({theme})=>theme.COLORS.FONT_WHITE};
      font-family:'Roboto Slab';
      font-weight:500;
      min-width:35rem;
      
      

    }
    
  }

  >.Container_Box .info{
    display:flex;
    align-items:center;
    justify-content:start;
    gap: 0.8rem;
    

    >div:nth-child(1){
      display:flex;
      align-items:center;
      gap:0.8rem;
      color: ${({theme})=>theme.COLORS.FONT_WHITE}
    }

    >div:nth-child(2){
      display:flex;
      align-items:center;
      gap:0.8rem;

      >span {
        color: ${({theme})=>theme.COLORS.FONT_WHITE}
      }
      
      >svg {
        font-size:1.6rem;
        color:${({theme})=>theme.COLORS.FONT_PINK}
      }
    }

    >div:nth-child(1) img{
      width:1.6rem;
      height:1.6rem;
      border-radius:1rem;
    }
  }

  >#Descricao{
    color:${({theme})=>theme.COLORS.FONT_WHITE};
    font-size:1.6rem;
    font-weight:400;
    line-height:2.1rem;
    display:flex;
    width:98%;
    text-align:fit;
  }
}


`