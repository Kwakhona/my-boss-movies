import styled from 'styled-components';

export const Wrapper = styled.div.attrs({className: 'container'})`
`;
export const Title = styled.h1`
    color: ${({theme}) => theme.textSecondary};
    font-size: 20px;
    font-weight: 300;
    margin-top: 24px;
    margin-bottom: 26px;
`;