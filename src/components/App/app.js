import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import MovieList from 'components/movie-list';
import { colorsLight } from 'styles/pallete';

import { Wrapper, Title } from './styles';

class App extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }
    render() {
        const { movies } = this.props;
        return (
            <ThemeProvider theme={colorsLight}>
                <Wrapper>
                    <Title>Boss Man's 80s Movies</Title>
                    <MovieList movies={movies}/>
                </Wrapper>
            </ThemeProvider>
        );
    }
}

export default App;