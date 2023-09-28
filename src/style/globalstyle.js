import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style-type: none;
}

:root{
  font-size:62.5%;
}

body {
font-size: 1.6rem;
font-family:"Roboto Slab",sans-serif;
background-color:${({theme})=>theme.COLORS.BACKGROUND};
  
}

button,a,img {
  cursor: pointer;
  text-decoration:none;
}

`