import React from 'react';
import { MovieItem, MovieImgDiv, MovieImg, MovieContent, MovieHeader, MovieSynopsis, CheckBox, Index } from './styles';

import './movie.scss';

const Movie = ({title, synopsis, imageUrl, index}) => {

  return (
    <MovieItem>
      <CheckBox type="checkbox"/>
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