import React from 'react';
import { MovieItem, MovieImgDiv, MovieImg, MovieContent, MovieHeader, MovieSynopsis, Index } from './styles';

import './movie.scss';

const Movie = ({title, synopsis, imageUrl, index}) => {

  return (
    <MovieItem>
      <MovieImgDiv>
          <MovieImg src={imageUrl} />
      </MovieImgDiv>
      <MovieContent>
          <MovieHeader>
            <Index>{index}. </Index>
            {title}
          </MovieHeader>
          <MovieSynopsis>{synopsis}</MovieSynopsis>
      </MovieContent>
  </MovieItem>
  );
}
Movie.propTypes = {

};
export default Movie;