import styled from "styled-components";

export const Container = styled.div`
width:100%;
display:flex;
align-items:center;

>span svg{
  color:${({theme})=>theme.COLORS.FONT_PINK};
  font-size:20px;
  
}

`