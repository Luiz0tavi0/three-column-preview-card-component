import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@599&display=swap');
  
  :root{
    --bright-orange: hsl(31, 77%, 52%);
    --dark-cyan: hsl(184, 100%, 22%);
    --very-dark-cyan: hsl(179, 100%, 13%);
    --transparent-white:hsla(0, 0%, 100%, 0.75);
    --very-light-gray: hsl(0, 0%, 95%);
  }
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Big Shoulders", sans-serif;
    font-size: 15px;
  }

  body {
    height: 100vh;
    display: flex;
    
    justify-content: center; 
    align-items: center;
    background-color: #ccc;
  }
  
  p {
    font-family: "Lexend Deca", sans-serif
  }

`

globalStyle.displayName = 'GlobalStyle'
export default globalStyle;
