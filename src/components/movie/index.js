import React from 'react';
import { MovieItem, MovieImgDiv, MovieImg, MovieContent, MovieHeader, MovieRelease, MovieSynopsis } from './styles';
// import { SortByToolBar, SortByGroup } from 'components/App/styles';
// import { SortByBtn } from 'styles/globals';

import './movie.scss';

const Movie = ({title, synopsis, imageUrl, index, releaseDate, toggle, toggleMovie}) => {
  return (
    <MovieItem id={index}>
      <MovieImgDiv onClick={() => {
              toggleMovie({index: index-1});
            }}>
          <MovieImg src={imageUrl} />
      </MovieImgDiv>
      <MovieContent>
          <MovieHeader>
            {title}
          </MovieHeader>

          <MovieRelease id={toggle ? 'releaseDate': ''}>Release: {releaseDate}</MovieRelease>
          <MovieSynopsis id={toggle ? 'synopsis': ''} >{synopsis}</MovieSynopsis>
      </MovieContent>
      {/* <SortByToolBar>
        <SortByGroup className="group">
          <SortByBtn className='btn btn-info'>Share Link</SortByBtn>
        </SortByGroup>
      </SortByToolBar> */}
  </MovieItem>
  );
}
export default Movie;