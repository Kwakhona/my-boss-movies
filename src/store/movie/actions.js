import moviesApi from 'services/moviesApi';
import { setLocalStorage } from 'services/localStorageService';
import { getLocalStorage } from '../../services/localStorageService';

export const actionTypes = {
    FETCH_MOVIES_REQUEST: 'FETCH_MOVIES_REQUEST',
    FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_FAILURE: 'FETCH_MOVIES_FAILURE',
    SET_STORE_LOCAL_STORAGE: 'SET_STORE_LOCAL_STORAGE',
    GET_STORE_LOCAL_STORAGE: 'GET_STORE_LOCAL_STORAGE',
    SELECT_SORT_BY: 'SELECT_SORT_BY',
    TOGGLE_MOVIE: 'TOGGLE_MOVIE'
};
const action = (type, payload) => ({type, payload});

const actions = {
    fetchMovies: (payload = {}) => {
        return dispatch => {
            dispatch(action(actionTypes.FETCH_MOVIES_REQUEST, payload));

            if(!getLocalStorage) {
                return moviesApi
                    .fetchMovies()
                    .then(data => {
                        dispatch(action(actionTypes.FETCH_MOVIES_SUCCESS,  data));
                        dispatch(action(actionTypes.SELECT_SORT_BY,  data));
                        setLocalStorage(data.type, data);
                    })
                    .catch(
                        error => dispatch(action(actionTypes.FETCH_MOVIES_FAILURE, error))
                    );
            } else {
               const data = getLocalStorage('top-5-movies');
               dispatch(action(actionTypes.FETCH_MOVIES_SUCCESS,  data));
               dispatch(action(actionTypes.SELECT_SORT_BY,  data));

            }
         }
    },
    sort: ({type}) => {
        return  dispatch => {
            dispatch(action(actionTypes.SELECT_SORT_BY, { sortBy: type}));
        }
    },
    toggleMovie: ({index}) => {
        return dispatch => {
            dispatch(action(actionTypes.TOGGLE_MOVIE, {index: index}));
        }
    },
    setLocalStorageState: (state) => {
        return dispatch => {
            dispatch(actionTypes.SET_STORE_LOCAL_STORAGE, state);
        }
    },
    getLocalStorageState: () => {
        return dispatch => {
            dispatch(actionTypes.GET_STORE_LOCAL_STORAGE, {});
        }
    }
}
export default actions;