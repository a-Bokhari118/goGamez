import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
}

body{
    font-family: 'Libre Baskerville', serif;
    width: 100%;
    background: linear-gradient( 90deg,#1b1b1b,#1b1b1b  ) ;
}

h2{
    font-size: 3rem;
    font-family: 'Bebas Neue', cursive;
    
    letter-spacing: 3px;
    font-weight: lighter;
}
h3{
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0;
}
p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969; 
}
a{
    text-decoration: none;
    color: #333;
}
img{
    display: block;
}

`;

export default GlobalStyles;
