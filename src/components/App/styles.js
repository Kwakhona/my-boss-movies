import styled from 'styled-components';

export const Container = styled.div.attrs({
    className: 'container-fluid'
})`
`;
export const Header = styled.div`
    // display: inline-flex
`;
export const Title = styled.h1`
    color: ${({theme}) => theme.text};
    font-size: 20px;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 26px;
    width: 96vw;
`;
export const Line = styled.hr`
    color: #EEE;
    backgroundColor: #EEE;
    border-bottom: 1px solid #EEE;
`;
export const SortbyTitle = styled.h1`
    color: ${({theme}) => theme.textSecondary};
    font-size: 20px;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 26px;
`;
