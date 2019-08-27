import { connect } from 'react-redux';
import actions from 'store/movie/actions';
import App from './app';

const mapStateToProps = state => ({
  app: state.app,
  movies: state.movie.movies,
  sortBy: state.movie.sortBy,
  sortBys: state.movie.sortBys,
  loading: state.movie.loading,
});
const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(actions.fetchMovies()),
  sort : (type) =>  dispatch(actions.sort(type)),
  toggleMovie: (index) => dispatch(actions.toggleMovie(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);