import moviesApi from 'services/moviesApi';

export const actionTypes = {
    FETCH_MOVIES_REQUEST: 'FETCH_MOVIES_REQUEST',
    FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_FAILURE: 'FETCH_MOVIES_FAILURE',
};
const action = (type, payload) => ({type, payload});

const actions = {
     fetchMovies: (payload = {}) => {
         return dispatch => {
             dispatch(action(actionTypes.FETCH_MOVIES_REQUEST, payload));

             return moviesApi
                .fetchMovies()
                .then(data =>
                    dispatch(action(actionTypes.FETCH_MOVIES_SUCCESS,  data))
                )
                .catch(
                    error => dispatch(action(actionTypes.FETCH_MOVIES_FAILURE, error))
                );
         };
    }
}
export default actions;