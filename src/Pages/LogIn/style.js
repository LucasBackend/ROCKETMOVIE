import styled from 'styled-components'
import backgroundImg from '../../../src/Assets/imagem.png'

export const Container = styled.div`
height:100vh;
display:flex;
align-items:stretch;
`

export const Login = styled.main`
width:34rem;
margin:23.5rem 16rem 0 13.5rem;



>.Header h1{
  color:${({theme})=>theme.COLORS.FONT_PINK};
  font-family:'Roboto Slab',sans-serif;
  font-size:4.8rem;
}
>.Header span{
  font-size:1.4rem;
  color:${({theme})=>theme.COLORS.FONT_GREY};
  width:100%;
}

>.Body {
  margin-top:4.8rem;

  >:nth-child(2){
    margin-bottom:.8rem;
  }
  >:nth-child(3){
    margin-bottom:2.4rem;
  }

>h2{
  color:white;
  margin-bottom:4.8rem;
  font-family:'Roboto Slab';
  font-size:2.4rem;
  font-weight:500;
  }
>div svg{
  fill:${({theme})=>theme.COLORS.FONT_GREY};
}

>button {
  margin-bottom:2.4rem;
}

>a {
 display:flex;
 justify-content:center;
 color:${({theme})=>theme.COLORS.FONT_PINK};
}


}




`

export const Background = styled.div`
background: url(${backgroundImg}) no-repeat center;
flex: 1;
background-size: cover;



`