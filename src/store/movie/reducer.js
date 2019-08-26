import { actionTypes } from './actions';

const getInitialState = () => ({
    sortBys: [],
    sortBy: '',
    movies: [],
    loading: false,
    error: ''
});

const movieReducer = (state = getInitialState(), { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                sortBys: payload['components'][0]['items'],
                movies: payload['components'][1]['items'],
                loading: false
            };
        case actionTypes.FETCH_MOVIES_FAILURE:
            return {
                ...state,
                ...payload
            };
        case actionTypes.SELECT_SORT_BY:
            const sortBy = payload.components ? payload['components'][0]['items'][0]['valueToOrderBy'] : payload.sortBy;
            const movies =  state.movies.sort((a, b) => a[sortBy] - b[sortBy]);
            return {
                ...state,
                sortBy: sortBy,
                movies: movies
            };
        case actionTypes.SET_STORE_LOCAL_STORAGE:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};
export default movieReducer;