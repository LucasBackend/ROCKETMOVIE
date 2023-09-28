import styled from "styled-components";


export const Container = styled.div`
width:100%;
height: 100vh ;
display:grid;
grid-template-rows: 11.6rem auto;
grid-template-areas: 
"Header"
"Content";



`


export const Content = styled.div`
width:100%;
grid-area: Content;

`


export const Main = styled.main`
margin: 4rem auto 0;
width: 113.7rem;
height:75rem;
display:flex;
flex-direction:column;
gap:4rem;
overflow-y:auto;

>.ContainerBox{
  width: 100%;
  max-height:100%;
  display:flex;
  flex-direction:column;
  gap:4rem;
  overflow-y:auto;
  padding:0.1rem;


  &::-webkit-scrollbar{
  width:0.5rem;
}

&::-webkit-scrollbar-track{
  background-color:transparent;
}

&::-webkit-scrollbar-thumb{
  background-color: ${({theme})=>theme.COLORS.FONT_PINK};
  border-radius: 5px;
}


>.HeaderBox{
  display:flex;
  flex-direction:column;
  align-items:start;
  
  >h1 {
    color: ${({theme})=>theme.COLORS.FONT_WHITE};
    font-family: 'Roboto Slab',sans-serif;
    font-size:3.6rem;
    font-weight:500;
  }
}

> div {
  display:flex;
  gap:1rem;

>div a {
  display:flex;
  align-items:center;
  justify-content:center;
  gap:1rem;
  color:${({theme})=>theme.COLORS.FONT_PINK};
}

 >:nth-child(2){
 width:30rem;
}

}

>.Marcadores {
  display:flex;
  flex-direction:column;
  gap:2.4rem;
}

>.Marcadores h2 {
  font-size:2rem;
  font-family:'Roboto Slab';
  font-weight:400;
  color: #999591;
}
>.Marcadores .CaixaMarcadores {
  width:100%;
  padding:0.5rem 0.5rem 0.5rem 1.5rem;
  min-height: 8.8rem;
  background-color:#000000;
  border-radius:1rem;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  gap:1rem;
}

>.Buttons{
  display:flex;
  gap:4rem;
  width:100%;

  >button{
    width:50%;
  }
}
}



`



