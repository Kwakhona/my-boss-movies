import { actionTypes } from './actions';

const getInitialState = () => ({
    sortBys: [],
    movies: [],
    loading: false,
    error: ''
});

const movieReducer = (state = getInitialState(), { type, payload}) => {
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

        default:
            return state;
    }
};
export default movieReducer;