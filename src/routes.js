
import React from 'react';
import { Route , IndexRoute } from 'react-router';

import App from './components/app-component/app';
import Movie from './components/movie-component/movie';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Movie}/>
    </Route>
);