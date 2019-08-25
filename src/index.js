import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import GlobalStyles from 'styles/globals';
import configureStore from 'store';
import App from 'components/App';
import * as registerServiceWorker from './serviceWorker';

const renderApp = () => {
    const store = configureStore({});
    ReactDOM.render(
        <Provider store={store}>
            <GlobalStyles/>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

renderApp();
registerServiceWorker.register()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
