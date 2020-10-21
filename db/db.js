import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(`${REQUEST_URL}`).then(res => res.json()).then(json => json.data.movies) //! 여기서 return 이 가능한가?  - promise객체해결
};

// export const getById = id => {
//     const filteredMovies = movies.filter(movie => movie.id === id);
//     return filteredMovies[0];
// };

// export const deleteMovie = id => {
//     const cleanedMovies = movies.filter((movie) => movie.id !== id);
//     movies = cleanedMovies;
//     return true
// };

// Mutation 등록
// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: `${movies.length + 1}`,
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;

// }