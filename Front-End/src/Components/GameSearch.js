import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import GameList from "./GameList";

function GameSearch() {
  const [games, setGames] = useState([]);
  const [gameView, setGameView] = useState(false);
  const [gameViewed, setGameViewed] = useState([]);
  const [URL, setURL] = useState('games')

  useEffect(() => {
    fetch(`http://localhost:9292/${URL}`)
      .then((r) => r.json())
      .then((fetchedGames) => setGames(fetchedGames));
  }, [URL]);

  function toggleGameView(game) {
    setGameView(!gameView);
    setGameViewed(game);
    console.log(game);
  }

  function toggleGameList() {
    setGameView(!gameView);
    setGameViewed([]);
  }

  return (
    <>
      <div>
        <h2 className="gamefound"> Games Found: </h2>
        <div className="resultBox">
          <div className="filterBox">
            <p onClick={()=>setURL('/genres/1')}>Action</p>
            <p onClick={()=>setURL('/genres/2')}>Adventure</p>
            <p onClick={()=>setURL('/genres/3')}>MMO</p>
            <p onClick={()=>setURL('/genres/4')}>RPG</p>
            <p onClick={()=>setURL('/genres/5')}>Simulation</p>
            <p onClick={()=>setURL('/genres/6')}>Sports & Racing</p>
            <p onClick={()=>setURL('/genres/7')}>Strategy</p>
          </div>
          <ul className="gamesListed"></ul>

          {gameView ? (
            <GameCard
              key={gameViewed.id}
              game={gameViewed}
              toggleGameList={toggleGameList}
            />
          ) : (
            games.map((game) => {
              return (
                <GameList
                  key={game.id}
                  game={game}
                  toggleGameView={toggleGameView}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default GameSearch;
