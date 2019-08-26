import { connect } from 'react-redux';
import actions from 'store/movie/actions';
import App from './app';

const mapStateToProps = state => ({
  app: state.ap,
  movies: state.movie.movies,
  sortBy: state.movie.sortBy,
  sortBys: state.movie.sortBys,
  loading: state.movie.loading,
});
const mapDispatchToProps = (dispatch, state) => ({
  fetchMovies: () => dispatch(actions.fetchMovies()),
  sort : (type) =>  dispatch(actions.sort(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);