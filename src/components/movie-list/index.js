import React from 'react';
import { MovieWrapper, MovieListWrapper } from './styles';
import Movie from 'components/movie';

const MovieList = ({movies, sortBy}) => (

  <MovieWrapper>
    <div className="col-md">
      <MovieListWrapper>
        {
          movies.map((movie, i) => (
              <Movie key={movie.id} index={i+1} sortBy={sortBy} {...movie}/>
            )
          )
        }
      </MovieListWrapper>
    </div>
  </MovieWrapper>
)
export default MovieList;