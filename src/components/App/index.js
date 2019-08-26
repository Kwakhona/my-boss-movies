import { connect } from 'react-redux';
import actions from 'store/movie/actions';
import App from './app';

const mapStateToProps = state => ({
  app: state.ap,
  movies: state.movie.movies,
  sortBy: state.movie.sortBy,
  sortBys: state.movie.sortBys,
  loading: state.movie.loading
});
const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(actions.fetchMovies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);