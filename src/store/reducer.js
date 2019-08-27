import { combineReducers } from 'redux';
import appReducer from './app/reducer';
import movieReducer from './movie/reducer';

const rootReducer = combineReducers({
    app: appReducer, movie: movieReducer
});

export default rootReducer;