const Movie = ({movie, likes}) => {
    console.log(likes);
    return (
        <>
            <h2>{movie.name}</h2>
            <p>Liked By:</p>
            <ul>
                {likes.map((profile) => {
                    return <li key={profile.id}>{profile.user.name}</li>
                })}
                <li>Nicholas Lain</li>
            </ul>
        </>
    )
}

export default Movie;