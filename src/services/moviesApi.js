import httpService from './httpService';
const API_URL = 'http://demo9595712.mockable.io/getTopFiveMovies';

const client = new httpService({baseURL: API_URL});

const moviesApi = {};

moviesApi.fetchMovies = () => client.get();
// moviesApi.getSortBys = year => {
//     const movies = moviesApi.fetchMovies();
//     const sortBys = movies.then(data => {
//         return data['components'][0]['items'];
//     })

//     return Promise.all(sortBys);
// };
// moviesApi.getMoviesByRank = year => {
//     const movies = moviesApi.fetchMovies();
//     const sortedMovies = movies.then(data => {
//         return data['components'][1]['items'].sort((a, b) => a.rank - b.rank);
//     })

//     return Promise.all(sortedMovies);
// };
// moviesApi.getMoviesByRelease = year => {
//     const movies = moviesApi.fetchMovies();
//     const sortedMovies = movies.then(data => {
//         return data['components'][1]['items'].sort((a, b) => a.releaseDate - b.releaseDate);
//     })

//     return Promise.all(sortedMovies);
// };

export default moviesApi;