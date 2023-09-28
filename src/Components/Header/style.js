import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.header`
width:100%;
height:11.6rem;
grid-area: Header;
border-bottom-style: solid;
border-bottom-width: 1px;
border-color: ${({theme})=>theme.COLORS.FONT_PLACEHOLDER};
margin:0;
padding: 4.2rem 12.3rem;
display:flex;
align-items:center;
gap: 6.4rem;

>h1{
  color: ${({theme})=>theme.COLORS.FONT_PINK};
  font-size: 2.4rem;
  
}

`


export const Profile = styled.div`
display:flex;
align-items:center;
gap:1rem;


>div{
  width:12.5rem;
  text-align:right;
}

>div h2 {
  font-size:1.4rem;
  font-weight:700;
  color:${({theme})=>theme.COLORS.FONT_GREY};
  
}

>div button {
  background-color:transparent;
  border:none;
  font-size:1.4rem;
  color:${({theme})=>theme.COLORS.FONT_GREY};
 

  
}

>a img{
  width:6.4rem;
  height:6.4rem;
  border-radius:3.5rem
}

`