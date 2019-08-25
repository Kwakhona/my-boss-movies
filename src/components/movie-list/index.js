import React from 'react';
import { MovieWrapper, CardGroup } from './styles';
import Movie from 'components/movie';

const MovieList = ({movies}) => (

  <MovieWrapper>
    <div className="col-md">
      <CardGroup>
        {
          movies.map(movie => (<Movie key={movie.id} {...movie}/>))
        }
      </CardGroup>
    </div>
  </MovieWrapper>
)
export default MovieList;