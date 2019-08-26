import styled from 'styled-components';

export const MovieWrapper = styled.div.attrs({className: 'row'})`
   background-color: ${({theme}) => theme.backgroundSecondary};
`;

export const MovieListWrapper = styled.div`
   background-color: ${({theme}) => theme.backgroundSecondary};
   margin: 0;
   padding: 15px;
   border-radius: 2px;
`;