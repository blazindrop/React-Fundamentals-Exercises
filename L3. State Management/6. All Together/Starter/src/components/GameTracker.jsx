import "./GameTracker.css";
import PlayerCard from './PlayerCard';
import { useState } from 'react';

const GameTracker = () => {

    const [players, setPlayers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [displayGamesPlayed, setDisplayGamesPlayed] = useState(true);

    const updateFirstName = (firstName) => {
        setFirstName(firstName);
    }
    const updateLastName = (lastName) => {
        setLastName(lastName);
    }
    const updateUserName = (userName) => {
        setUserName(userName);
    }
    const updateDisplayGamesPlayed = (event) => {
        setDisplayGamesPlayed(!displayGamesPlayed);
    }
    const isUniqueUsername = (userName) => {
        if (players.length === 0) {
            return true;
        }
        const matches = players.filter((p) => p.userName.toLowerCase() === userName.toLowerCase());
        return matches.length === 0 ? true : false;
    }
    const addPlayer = (event) => {
        // update the player list. check for unique user name.
        event.preventDefault();
        if (!isUniqueUsername(userName)) {
            alert("Username is not unique. Try again.");
        }
        else {
            console.log(`Adding player ${firstName} ${lastName} ${userName}`);
            const newPlayers = [...players, {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                gamesPlayed: 0
            }];
            setPlayers(newPlayers);
        }
    }

    const isInputValid = () => firstName.length && lastName.length && userName.length;

    return (
        <div id="game-tracker">
            <div id="game-tracker-header">
                <form name="game-tracker" onSubmit={addPlayer}>
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => updateFirstName(e.target.value)} />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => updateLastName(e.target.value)} />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            value={userName}
                            onChange={(e) => updateUserName(e.target.value)} />
                    </div>
                    <div>
                        <button
                            name="add" 
                            disabled={!isInputValid()}>Add</button>
                    </div>
                </form>
            </div>
            <div>
                <h2>Players</h2>
                <button onClick={(e) => updateDisplayGamesPlayed(e)}>{displayGamesPlayed ? "Hide " : "Show "} Games Played</button>
                {players.length === 0 && (
                    <p>No players yet. Add a player!</p>
                )}
                {players.length > 0 && (
                    <ul> 
                        {players.map((p) => (
                            <li key={p.userName}>
                                <PlayerCard
                                    key={p.userName}
                                    firstName={p.firstName}
                                    lastName={p.lastName}
                                    userName={p.userName}
                                    gamesPlayed={p.gamesPlayed}
                                    displayGamesPlayed={displayGamesPlayed}
                                    />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default GameTracker;