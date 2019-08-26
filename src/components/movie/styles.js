import styled  from 'styled-components';

export const MovieItem = styled.li.attrs({
    className: 'movie-item'
})`
    display: flex;
    padding: 10px 5px;
    cursor: pointer;
    &:not(:last-child){
        border-bottom: 1px solid #EEE;
    }
`;
export const MovieImgDiv = styled.div`
    flex-shrink: 0;
    height: 80px;
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
    // margin-top: 15px;
    margin-top: 19px;
`;
export const MovieSynopsis = styled.p.attrs({id: 'synopsis'})`
    margin-top: 5px;
    color: ${({theme}) =>  theme.textSecondary};
    margin-bottom: 0;
    visibility: hidden;
    height: 0
`;
export const Index = styled.span`
`;