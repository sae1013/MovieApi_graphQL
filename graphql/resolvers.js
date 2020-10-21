import { movies, getById, getMovies, deleteMovie, addMovie } from "../db/db";



const resolvers = {
    Query: {
        movies: (_, args) => getMovies(args.limit, args.rating),
        // movie: (_, args) => getById(args.id)
    },
    // Mutation: {
    //     addMovie: (_, args) => {
    //         return addMovie(args.name, args.score)
    //     },
    //     deleteMovie: (_, args) => {
    //         return deleteMovie(args.id)
    //     }
    // }
};


export default resolvers;