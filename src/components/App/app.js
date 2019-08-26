import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import MovieList from 'components/movie-list';
import { colorsLight } from 'styles/pallete';
import { Container, Header, Title, SortbyTitle, Line } from './styles';
import { SortBy } from 'components/sort-by';

class App extends Component {
    componentDidMount() {
        this.props.fetchMovies();
        this.sortBy('releaseDate')
    }
    sortBy(type) {
        this.props.movies.sort((a, b) => {
            return a[type] - b[type]
        });
    }
    render() {
        const { movies, sortBys, sortBy } = this.props;
        return (
            <ThemeProvider theme={colorsLight}>
                <Container>
                    <Header>
                        <Title>Boss Man's 80s Movies</Title>
                        <Line />
                        {/* <SortbyTitle>Sort By: </SortbyTitle> */}
                        {/* <SortBy sortBys={sortBys}></SortBy> */}
                    </Header>
                    <MovieList movies={movies} sortBy={sortBy}/>
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;