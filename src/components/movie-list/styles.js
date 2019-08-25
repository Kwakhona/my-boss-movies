import styled from 'styled-components';

export const MovieWrapper = styled.div.attrs({className: 'row'})`
   background-color: ${({theme}) => theme.backgroundSecondary};
`;

export const CardGroup = styled.div.attrs({
   className: 'card-group'
})`
`;