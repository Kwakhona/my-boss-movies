import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import MovieList from 'components/movie-list';
import { colorsLight } from 'styles/pallete';
import { Container, Header, Title, Line, SortByToolBar, SortByGroup, SortByBtn } from './styles';

class App extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchMovies();
    }
    handleClick(type) {;
        this.props.sort({type});
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
                            <SortByGroup >
                                {
                                    sortBys.map((sortBy, i) => (
                                        <SortByBtn key={i}  onClick={
                                            () => this.handleClick(sortBy.valueToOrderBy)
                                        }>
                                            {sortBy.label}
                                        </SortByBtn>
                                        )
                                    )
                                }
                            </SortByGroup>
                        </SortByToolBar>
                    </Header>
                    <MovieList movies={movies} sortBy={sortBy}/>
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;