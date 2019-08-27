import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: box-border;
    }
    html, body {
        font-family: Lato, Helvetica-Neu, Helvetica, Arial, sans-serif;
        overflow: scroll;
        height: 100vh
        margin: 0;
        padding: 0;
        background-color: #F8F8F8;
    }

    ul {
        list-style: none;
        padding: ;
    }
    a {
        text-decoration: none;
        &:visited{
            color: inherit
        }
    }`;
export default GlobalStyles;

export const SortByBtn = styled.button`
    width: 70px;
`;