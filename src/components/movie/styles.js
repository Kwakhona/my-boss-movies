import styled  from 'styled-components';

export const MovieItem = styled.li.attrs({
    className: 'movie-item'
})`
    display: flex;
    padding: 10px 5px;

    &:not(:last-child){
        border-bottom: 1px solid #EEE;
    }
    &:last-child{
        border-bottom: 1px solid #EEE;
    }

    &:first-child {
        border-top: 1px solid #EEE;
    }
`;
export const MovieImgDiv = styled.div`
    flex-shrink: 0;
    height: 80px;
    cursor: pointer;
`;
export const MovieImg = styled.img.attrs({
    id: 'movieUrl',
    alt: 'Thumbnail'
})`
    border-radius: 50%;
    width: 65px;
    height: 65px;
`;
export const MovieContent = styled.div.attrs({id: 'content'})`
    flex-grow: 1;
    padding: 0 20px;
`;
export const MovieHeader = styled.h4`
    color: ${({theme}) => theme.text};
    margin: 0;
    font-size: 18px;
    margin-top: 19px;
`;
export const MovieRelease = styled.h3`
    color: ${({theme}) => theme.text};
    margin: 0;
    font-size: 16px;
    margin-top: 5px;
    display: none;
`;
export const MovieSynopsis = styled.p.attrs({id: 'synopsis'})`
    margin-top: 5px;
    color: ${({theme}) =>  theme.textSecondary};
    margin-bottom: 0;
    display: none;
`;
export const Index = styled.span`
`;