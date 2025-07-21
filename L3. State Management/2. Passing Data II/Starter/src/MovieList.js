import Movie from './Movie.js';

const MovieList = ({movies, users, profiles}) => {
    //console.log(movies);

    function getMovieLikes(movieId) {
        const matches = profiles.filter((el) => el.favoriteMovieID === movieId);
        console.log(matches);
        const fullMatches = matches.map((match) => {
            const user = users[match.userID];
            match.user = user;
            return match;
        });

        console.log(fullMatches);
        return matches;
    }

    return (
        <>
        {Object.entries(movies).map((entry) => {
            const mid = entry[0];
            const movie = entry[1];
            const likes = getMovieLikes(mid);
            return <Movie key={mid} movie={movie} likes={likes} />
        })}
        </>
    )
}

export default MovieList;