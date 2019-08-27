import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const isProd = process.NODE_ENV === 'production';
const middlewareList = [];


middlewareList.push(thunk);
if(!isProd) {
    middlewareList.push(logger);
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewareList),
  // other store enhancers if any
);
const middleware = compose(enhancer);

export default middleware;