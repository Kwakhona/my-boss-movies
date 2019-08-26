import styled  from 'styled-components';

export const MovieItem = styled.li`
    display: flex;
    padding: 10px 5px;
    &:not(:last-child){
        border-bottom: 1px solid #EEE;
    }
`;
export const MovieImgDiv = styled.div`
    flex-shrink: 0;
    height: 80px;
`;
export const CheckBox = styled.input`
    position: absolute;
    left: -9999px;
`;
export const MovieImg = styled.img.attrs({alt: 'Thumbnail'})`
    border-radius: 50%;
    width: 95px;
    height: 95px;
`;
export const MovieContent = styled.div`
    flex-grow: 1;
    padding: 0 20px;
`;
export const MovieHeader = styled.h4`
    margin: 0;
    font-size: 18px;
    margin-top: 15px;
    color: ${({theme}) => theme.text};
`;
export const MovieSynopsis = styled.p`
    margin-top: 5px;
    color: ${({theme}) =>  theme.textSecondary};
    margin-bottom: 0;
    display: no
`;
export const MovieAction = styled.div`
    flex-grow: 3;
    padding: 0 20px;
    margin-top: 20px;
`;
export const MovieActionBtn = styled.button.attrs({
    className: 'btn btn-secondary btn-lg btn-block'
})`

`;
