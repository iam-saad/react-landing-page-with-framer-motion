import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #1b1b1b;
    font-size: 62.5%;
    font-family: 'Inter', sans-serif;
  }
  button{
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background: transparent;
    border: 3px solid #23d997;
    cursor:pointer;
    transition: all 0.5s ease-out;
    font-family: 'Inter', sans-serif;
    &:hover{
      background:#23d997;
      color:black; 
    }
  }
  h1{
    font-size: 4.5rem;
    font-weight: lighter;
  }
  h2{
    font-size: 4.2rem;
  }
  h3{
    font-size: 2rem;
  }
  h4{
    font-size: 2rem;
    font-weight: bold; 
  }
  p{
    font-size: 1.3rem;
    padding: 3rem 0rem;
    line-height: 150%;
    color: #ccc;
  }
  span{
    font-weight:bold;
    color: #23d997;
  }
`;

export default GlobalStyles;
