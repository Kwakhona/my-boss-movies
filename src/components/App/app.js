import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import MovieList from 'components/movie-list';
import { colorsLight } from 'styles/pallete';
import { Container, Header, Title, Line, SortByToolBar, SortByGroup } from './styles';
import { SortByBtn } from 'styles/globals';

class App extends Component {
    constructor(props) {
        super(props);
        this.sortMovies = this.sortMovies.bind(this);
        this.toggleMovie = this.toggleMovie.bind(this);
    }
    componentDidMount() {
        this.props.fetchMovies();
    }
    sortMovies(type) {
        this.props.sort({type});
    }
    toggleMovie(index) {
        if(index && index !== null) {
            this.props.toggleMovie(index);
            this.forceUpdate();
        }
    }
    render() {
        const { movies, sortBys, sortBy } = this.props;
        return (
            <ThemeProvider theme={colorsLight}>
                <Container>
                    <Header>
                        <Title>Boss Man's 80s Movies</Title>
                        <Line />
                        <SortByToolBar>
                            <SortByGroup>
                                {
                                    sortBys.map((sortBy, i) => (
                                        <SortByBtn key={i}
                                            className={
                                                sortBy.valueToOrderBy === this.props.sortBy ?
                                                'btn btn-secondary active': 'btn btn-secondary'
                                            }
                                             onClick={
                                                 () => this.sortMovies(sortBy.valueToOrderBy)
                                            }>
                                            {sortBy.label}
                                        </SortByBtn>
                                        )
                                    )
                                }
                            </SortByGroup>
                        </SortByToolBar>
                    </Header>
                    <MovieList movies={movies} sortBy={sortBy} toggleMovie={this.toggleMovie} />
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;