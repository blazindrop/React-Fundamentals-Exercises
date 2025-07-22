import './PlayerCard.css';

const PlayerCard = ({firstName, lastName, userName, gamesPlayed, displayGamesPlayed}) => {
    return (
        <div className="player-card">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>User Name: {userName}</p>
            {displayGamesPlayed && (
                <p>Games Played: {gamesPlayed}</p>
            )}
        </div>
    )
}

export default PlayerCard;