import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #1b1b1b;
    font-size: 65.2%;
  }
  button{
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background: transparent;
    border: 3px solid #23d997;
    cursor:pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
      background:#23d997;
      color:black; 
    }
  }
  h1{
    font-size: 4.8rem;
    font-weight: lighter;
  }
  h2{
    font-size: 3.8rem;
  }
  h3{
    font-size: 2rem;
  }
  h4{
    font-size: 2.5rem;
    font-weight: bold; 
  }
  p{
    font-size: 1.5rem;
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
