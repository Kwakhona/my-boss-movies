import { createStore } from 'redux';

import reducer from './reducer';
import middleware from './middleware';

const configureStore = () => {
    const store = createStore(reducer, middleware);

  return store;
};
export default configureStore;