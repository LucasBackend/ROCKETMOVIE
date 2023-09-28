import styled from 'styled-components'


export const Container = styled.div`
width:100%;
height:100vh;

>main {
  width: 32rem;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  gap:2.5rem;

  >.Img{
    margin:-9.4rem auto 0;
    position:relative;

    >img{
      border-radius:11rem;
      width:18.6rem;
      height:18.6rem;
    }

    >label{
      background-color:${({theme})=>theme.COLORS.FONT_PINK};
      width:4.8rem;
      height:4.8rem;
      position:absolute;
      border-radius:4rem;
      bottom:0.5rem;
      right:1rem;
      display:flex;
      align-items:center;
      justify-content:center;
      cursor:pointer;
      

      > svg {
        
      }

      >input{
        display:none;
      }
    }
  }

  .BoxName svg, .BoxPassword svg{
    fill:#948F99;
    color:#948F99;
  }

  >.BoxName{
    display:flex;
    flex-direction:column;
    gap: 0.7rem;
  }

  >.BoxPassword{
    display:flex;
    flex-direction:column;
    gap: 0.7rem;
  }
}

`

export const Header= styled.header`
width:100%;
height:14.4rem;
background-color: ${({theme})=>theme.COLORS.BACKGROUND_LIST};
display:flex;
align-items:center;


>a button {
  width:7rem;
  margin-left:14.4rem;
}

`